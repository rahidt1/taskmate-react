/**
 * Check if the string only contains whitespace
 * @param {String} str
 * @returns {Boolean} If string contains only whitespace returns true else false
 */

export function isWhiteSpaceString(str) {
  return !str.trim().length;
}

/*
export function isWhiteSpaceString(str) {
  return !str.replace(/\s/g, "").length;
}
*/
