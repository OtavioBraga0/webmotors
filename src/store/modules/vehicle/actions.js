export function modelRequest(id, model) {
  return { type: '@vehicle/LIST_MODEL_REQUEST', id, model };
}

export function makeRequest(make) {
  return { type: '@vehicle/LIST_MAKE_REQUEST', make };
}

export function versionRequest(id, version) {
  return { type: '@vehicle/LIST_VERSION_REQUEST', id, version };
}
