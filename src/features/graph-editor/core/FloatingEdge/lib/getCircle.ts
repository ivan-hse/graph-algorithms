import { NODE_RADIUS } from "../../../static/NODE_RADIUS.ts";
import type { ICircle } from "../types/ICircle.ts";
import type { INodeGeometry } from "../types/INodeGeometry.ts";

const getCircle = (node: INodeGeometry): ICircle => {
  const { x, y } = node.internals.positionAbsolute;

  const width = node.measured.width ?? NODE_RADIUS * 2;
  const height = node.measured.height ?? NODE_RADIUS * 2;

  return {
    centerX: x + width / 2,
    centerY: y + height / 2,
    radius: Math.min(width, height) / 2,
  };
};

export { getCircle };
