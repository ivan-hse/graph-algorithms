import type { ICircle } from "../types/ICircle.ts";

const getPointOnCircle = (
  circle: ICircle,
  toX: number,
  toY: number,
): { x: number; y: number } => {
  const dx = toX - circle.centerX;
  const dy = toY - circle.centerY;

  const distance = Math.hypot(dx, dy) || 1;

  return {
    x: circle.centerX + (dx / distance) * circle.radius,
    y: circle.centerY + (dy / distance) * circle.radius,
  };
};

export { getPointOnCircle };
