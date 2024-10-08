export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export function isNull(value: any) {
  return value === null;
}

export function isNumber(value: any) {
  return typeof value === 'number' && !isNaN(value);
}

export function isString(value: any) {
  return typeof value === 'string';
}

export function isBoolean(value: any) {
  return typeof value === 'boolean';
}

export function isObject(value: any) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isArray(value: any) {
  return Array.isArray(value);
}

export function isArrayHasValue(value: any) {
  return Array.isArray(value) && value.length > 0;
}

export function isNaN(value: any) {
  return isNaN(value);
}
