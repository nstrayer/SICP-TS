import { head, pair, Pair, tail } from "./utils/pair";

console.group("2.2");

type Point = Pair<number, number>;

function make_point(x: number, y: number): Point {
  return [x, y];
}

function x_point(point: Point): number {
  const x = point[0];
  if (Array.isArray(x)) {
    throw new Error("Point is not two numbers");
  }
  return x;
}
function y_point(point: Point): number {
  const y = point[1];
  if (Array.isArray(y)) {
    throw new Error("Point is not two numbers");
  }
  return y;
}

type Segment = [Point, Point];
function make_segment(start: Point, end: Point): Segment {
  return [start, end];
}

function start_segment(segment: Segment): Point {
  return segment[0];
}

function end_segment(segment: Segment): Point {
  return segment[1];
}

function print_point(p: Point) {
  console.log(`(x:${x_point(p)}, y:${y_point(p)})`);
}

function midpoint_segment(segment: Segment): Point {
  const start = start_segment(segment);
  const end = end_segment(segment);

  return make_point(
    (x_point(start) + x_point(end)) / 2,
    (y_point(start) + y_point(end)) / 2
  );
}

const p1 = make_point(2, 3);
const p2 = make_point(4, 6);
print_point(p1);
print_point(p2);

const s1 = make_segment(p1, p2);
console.log("Segment", s1);
print_point(start_segment(s1));
print_point(end_segment(s1));

print_point(midpoint_segment(s1));

console.groupEnd();
