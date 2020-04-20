import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { modeloRequest, marcaRequest, versaoRequest } from './actions';

function* listModeloRequest({ id }) {
  const response = yield call(api.get, `/Model?MakeID=${id}`);

  yield put(modeloRequest(id, response.data));
}

function* listMarcaRequest() {
  const response = yield call(api.get, `/Make`);

  yield put(marcaRequest(response.data));
}

function* listVersaoRequest({ id }) {
  const response = yield call(api.get, `/Version?ModelID=${id}`);

  yield put(versaoRequest(id, response.data));
}

export default all([
  takeLatest('@veiculo/LIST_MODELO_REQUEST', listModeloRequest),
  takeLatest('@veiculo/LIST_MARCA_REQUEST', listMarcaRequest),
  takeLatest('@veiculo/LIST_VERSAO_REQUEST', listVersaoRequest),
]);
