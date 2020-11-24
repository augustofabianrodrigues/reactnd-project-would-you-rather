/**
 * Joins the provided url parts with a '/'.
 * @param  {...string} parts The url parts to join.
 */
export function pathJoin(...parts) {
  return parts.join('/').replace(/\/{1,}/g, '/');
}
