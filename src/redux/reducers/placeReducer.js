import { SAVE_PLACE, DELETE_PLACE } from '../action';
import { initialState } from './initialState';

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLACE: {
      const placeItems = [...state.placeItems, action.payload.item];
      return {
        ...state,
        placeItems,
      };
    }
    case DELETE_PLACE: {
      return {
        ...state,
        placeItems: action.payload.placeItems,
      };
    }
    default:
      return state;
  }
};

export default placeReducer;
