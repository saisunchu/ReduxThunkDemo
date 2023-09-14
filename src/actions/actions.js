import {FETCH_API, NAME} from './actionsTypes';

export const setName = payload => dispatch => {
  dispatch({type: NAME, value: payload});
};

// export const setFetchAPi = async () => {
//   let response = await fetch(`https://dummyjson.com/products?limit=100`);
//   let responseJson = await response.json();
//   let products = responseJson.products;
//   console.log('products -------------- :: ', products);
//   return {
//     type: FETCH_API,
//     value: products,
//   };
// };

export const setFetchAPi = () => async dispatch => {
  try {
    let response = await fetch(`https://dummyjson.com/products?limit=100`);
    let responseJson = await response.json();
    let products = responseJson.products;
    console.log('products -------------- :: ', products);
    dispatch({type: FETCH_API, value: products});
  } catch (error) {
    console.error(error);
  }
};
