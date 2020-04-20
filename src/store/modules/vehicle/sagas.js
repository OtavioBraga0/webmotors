import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { modelRequest, makeRequest, versionRequest } from './actions';

function* listModelRequest({ id }) {
  const response = yield call(api.get, `/Model?MakeID=${id}`);

  yield put(modelRequest(id, response.data));
}

function* listMakeRequest() {
  const response = yield call(api.get, `/Make`);

  yield put(makeRequest(response.data));
}

function* listVersionRequest({ id }) {
  const response = yield call(api.get, `/Version?ModelID=${id}`);

  yield put(versionRequest(id, response.data));
}

export default all([
  takeLatest('@vehicle/LIST_MODEL_REQUEST', listModelRequest),
  takeLatest('@vehicle/LIST_MAKE_REQUEST', listMakeRequest),
  takeLatest('@vehicle/LIST_VERSION_REQUEST', listVersionRequest),
]);
