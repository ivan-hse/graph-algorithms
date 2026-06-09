import type { IFloatingEdgeParams } from "../types/IFloatingEdgeParams.ts";
import type { INodeGeometry } from "../types/INodeGeometry.ts";
import { getCircle } from "./getCircle.ts";
import { getPointOnCircle } from "./getPointOnCircle.ts";

const getFloatingEdgeParams = (
  source: INodeGeometry,
  target: INodeGeometry,
): IFloatingEdgeParams => {
  const sourceCircle = getCircle(source);
  const targetCircle = getCircle(target);

  const sourcePoint = getPointOnCircle(
    sourceCircle,
    targetCircle.centerX,
    targetCircle.centerY,
  );
  const targetPoint = getPointOnCircle(
    targetCircle,
    sourceCircle.centerX,
    sourceCircle.centerY,
  );

  return {
    sourceX: sourcePoint.x,
    sourceY: sourcePoint.y,
    targetX: targetPoint.x,
    targetY: targetPoint.y,
  };
};

export { getFloatingEdgeParams };
