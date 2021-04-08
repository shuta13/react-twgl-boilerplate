import {
  createBufferInfoFromArrays,
  createProgramInfo,
  drawBufferInfo,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setUniforms,
} from 'twgl.js';
import { css } from '@linaria/core';

export const Canvas: React.FC = () => {
  const onCanvasLoaded = (element: HTMLCanvasElement) => {
    if (!element) return;

    const gl = element.getContext('webgl');

    if (gl == null) return;

    const programInfo = createProgramInfo(gl, [
      require('./shaders/vertex.glsl').default,
      require('./shaders/fragment.glsl').default,
    ]);

    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };
    const bufferInfo = createBufferInfoFromArrays(gl, arrays);

    function render(time: number) {
      if (!gl?.canvas) return;

      resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      const uniforms = {
        time: time * 0.001,
        resolution: [gl.canvas.width, gl.canvas.height],
      };

      gl.useProgram(programInfo.program);
      setBuffersAndAttributes(gl, programInfo, bufferInfo);
      setUniforms(programInfo, uniforms);
      drawBufferInfo(gl, bufferInfo);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  };
  return <canvas className={wrap} ref={onCanvasLoaded} />;
};

const wrap = css`
  width: 100%;
`;
