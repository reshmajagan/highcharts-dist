/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    /**
     * Finds the root of a given function. The root is the input value needed
     * for a function to return 0.
     *
     * See https://en.wikipedia.org/wiki/Bisection_method#Algorithm
     *
     * TODO: Add unit tests.
     *
     * @param f
     *        The function to find the root of.
     *
     * @param a
     *        The lowest number in the search range.
     *
     * @param b
     *        The highest number in the search range.
     *
     * @param tolerance
     *        The allowed difference between the returned value and root.
     *
     * @param maxIterations
     *        The maximum iterations allowed.
     */
    function bisect(f: Function, a: number, b: number, tolerance?: number, maxIterations?: number): void;
    /**
     * An extended version of draw customized for points. It calls additional
     * methods that is expected when rendering a point.
     *
     * @param params
     *        Parameters
     */
    function drawPoint(params: object): void;
    /**
     * Calculates the angle between two points.
     *
     * TODO: add unit tests.
     *
     * @param p1
     *        The first point.
     *
     * @param p2
     *        The second point.
     *
     * @return Returns the angle in radians.
     */
    function getAngleBetweenPoints(p1: object, p2: object): number;
    /**
     * Calculates the area of a circle based on its radius.
     *
     * @param r
     *        The radius of the circle.
     *
     * @return Returns the area of the circle.
     */
    function getAreaOfCircle(r: number): number;
    /**
     * Calculate the path for the area of overlap between a set of circles.
     *
     * TODO: handle cases with only 1 or 0 arcs.
     *
     * @param circles
     *        List of circles to calculate area of.
     *
     * @return Returns the path for the area of overlap. Returns an empty string
     *         if there are no intersection between all the circles.
     */
    function getAreaOfIntersectionBetweenCircles(circles: any[]): string;
    /**
     * Calculates the center between a list of points.
     *
     * @param points
     *        A list of points to calculate the center of.
     */
    function getCenterOfPoints(points: any[]): void;
    /**
     * Calculates the intersection points of two circles.
     *
     * NOTE: does not handle floating errors well.
     *
     * @param c1
     *        The first circle.s
     *
     * @param c2
     *        The second sircle.
     *
     * @return Returns the resulting intersection points.
     */
    function getCircleCircleIntersection(c1: object, c2: object): any[];
    /**
     * Calculates all the intersection points for between a list of circles.
     *
     * @param circles
     *        The circles to calculate the points from.
     *
     * @return Returns a list of intersection points.
     */
    function getCirclesIntersectionPoints(circles: any[]): any[];
    /**
     * Calculates the area of a circular segment based on the radius of the
     * circle and the height of the segment. See
     * http://mathworld.wolfram.com/CircularSegment.html
     *
     * @param r
     *        The radius of the circle.
     *
     * @param h
     *        The height of the circular segment.
     *
     * @return Returns the area of the circular segment.
     */
    function getCircularSegmentArea(r: number, h: number): number;
    /**
     * Calculates the distance between two points based on their x and y
     * coordinates.
     *
     * @param p1
     *        The x and y coordinates of the first point.
     *
     * @param p2
     *        The x and y coordinates of the second point.
     *
     * @return Returns the distance between the points.
     */
    function getDistanceBetweenPoints(p1: object, p2: object): number;
    /**
     * Calculates the area of overlap between two circles based on their
     * radiuses and the distance between them. See
     * http://mathworld.wolfram.com/Circle-CircleIntersection.html
     *
     * @param r1
     *        Radius of the first circle.
     *
     * @param r2
     *        Radius of the second circle.
     *
     * @param d
     *        The distance between the two circles.
     *
     * @return Returns the area of overlap between the two circles.
     */
    function getOverlapBetweenCircles(r1: number, r2: number, d: number): number;
    /**
     * Tests wether a point lies within a set of circles.
     *
     * @param point
     *        The point to test.
     *
     * @param circles
     *        The list of circles to test against.
     *
     * @return Returns true if the point is inside all the circles, false if
     *         not.
     */
    function isPointInsideAllCircles(point: object, circles: any[]): boolean;
    /**
     * Tests wether a point lies within a given circle.
     *
     * @param point
     *        The point to test for.
     *
     * @param circle
     *        The circle to test if the point is within.
     *
     * @return Returns true if the point is inside, false if outside.
     */
    function isPointInsideCircle(point: object, circle: object): boolean;
    /**
     * Tests wether a point lies outside a set of circles.
     *
     * TODO: add unit tests.
     *
     * @param point
     *        The point to test.
     *
     * @param circles
     *        The list of circles to test against.
     *
     * @return Returns true if the point is outside all the circles, false if
     *         not.
     */
    function isPointOutsideAllCircles(point: object, circles: any[]): boolean;
}
export default factory;
export let Highcharts: typeof _Highcharts;
