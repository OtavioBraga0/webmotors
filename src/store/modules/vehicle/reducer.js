import produce from 'immer';

export default function vehicle(
  state = { model: [], make: [], version: [] },
  action
) {
  switch (action.type) {
    case '@vehicle/LIST_MODEL_REQUEST':
      return produce(state, draft => {
        draft.model = action.model;
      });
    case '@vehicle/LIST_MAKE_REQUEST':
      return produce(state, draft => {
        draft.make = action.make;
      });
    case '@vehicle/LIST_VERSION_REQUEST':
      return produce(state, draft => {
        if (action.version && draft.version.length === 0) {
          draft.version = action.version;
        }
      });
    default:
      return state;
  }
}
