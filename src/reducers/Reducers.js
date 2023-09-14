import {FETCH_API, NAME} from '../actions/actionsTypes';

let Initialstate = {
  name: '',
  FetchAPIData: [],
};
const Reducers = (state = Initialstate, action) => {
  console.log('Inside Reducer Fn');
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.value,
      };
    case FETCH_API:
      return {
        ...state,
        FetchAPIData: action.value,
      };
    default:
      return state;
  }
};
export default Reducers;
