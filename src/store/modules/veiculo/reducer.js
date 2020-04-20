import produce from 'immer';

export default function veiculo(
  state = { modelo: [], marca: [], versao: [] },
  action
) {
  switch (action.type) {
    case '@veiculo/LIST_MODELO_REQUEST':
      return produce(state, draft => {
        draft.modelo = action.modelo;
      });
    case '@veiculo/LIST_MARCA_REQUEST':
      return produce(state, draft => {
        draft.marca = action.marca;
      });
    case '@veiculo/LIST_VERSAO_REQUEST':
      return produce(state, draft => {
        if (action.versao && draft.versao.length === 0) {
          draft.versao = action.versao;
        }
      });
    default:
      return state;
  }
}
