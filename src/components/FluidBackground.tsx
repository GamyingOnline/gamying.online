import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShaderSource = `
precision highp float;
uniform float time;
uniform vec2 resolution;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float smootherstep(float x) {
    x = clamp(x, 0.0, 1.0);
    return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

vec3 getEvolvingColor(float t, float speed, float offset) {
    float slowTime = t * 0.20;  
    
    float hueBase = slowTime * speed + offset;
    float hueModulation = sin(slowTime * 0.29) * 0.1;  
    float hue = fract(hueBase + hueModulation);
    
    float satBase = 0.75;
    float satModulation = sin(slowTime * 0.075) * 0.15;
    float saturation = satBase + satModulation;
    
    float valBase = 0.85;
    float valModulation = sin(slowTime * 0.05 + offset * 6.28) * 0.1;
    float value = valBase + valModulation;
    
    return hsv2rgb(vec3(hue, saturation, value));
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float slowTime = time * 0.40;  
    
    float n1 = snoise(uv * 1.1 + slowTime * 0.15);
    float n2 = snoise(uv * 0.8 - slowTime * 0.045);
    float n3 = snoise(uv * 1.4 + slowTime * 0.08);
    float n4 = snoise(uv * 0.6 - slowTime * 0.085);
    
    vec3 color1 = getEvolvingColor(time, 0.007, 0.0);
    vec3 color2 = getEvolvingColor(time, 0.006, 0.25);
    vec3 color3 = getEvolvingColor(time, 0.008, 0.5);
    vec3 color4 = getEvolvingColor(time, 0.0065, 0.75);
    
    float blend1 = smootherstep((n1 * 0.3 + 0.5) * 0.5 + 0.25);
    float blend2 = smootherstep((n2 * 0.3 + 0.5) * 0.4 + 0.3);
    float blend3 = smootherstep((n3 * 0.3 + 0.5) * 0.3 + 0.35);
    
    vec3 col = mix(color1, color2, blend1);
    col = mix(col, color3, blend2);
    col = mix(col, color4, blend3);
    
    float modulation = n4 * 0.01;
    col += vec3(modulation);
    
    col = clamp(col * 1.1, 0.0, 1.0);  
    
    gl_FragColor = vec4(col, 1.0);
}`;

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    if (!vs) return;

    gl.shaderSource(vs, vertexShaderSource);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fs) return;

    gl.shaderSource(fs, fragmentShaderSource);
    gl.compileShader(fs);

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    const startTime = Date.now();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ filter: 'blur(20px)' }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10" />
    </>
  );
};

export default FluidBackground;
