export function modeloRequest(id, modelo) {
  return { type: '@veiculo/LIST_MODELO_REQUEST', id, modelo };
}

export function marcaRequest(marca) {
  return { type: '@veiculo/LIST_MARCA_REQUEST', marca };
}

export function versaoRequest(id, versao) {
  return { type: '@veiculo/LIST_VERSAO_REQUEST', id, versao };
}
