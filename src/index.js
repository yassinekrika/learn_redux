import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux';

// STORE -> GLOVALIZED STATE


// ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// REDUCER
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT': 
//       return state + 1
//     case 'DECREMENT': 
//       return state - 1
//   }
// }

let store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// store.subscribe(() => {console.log(store.getState())})

// // DISPATCH
// store.dispatch(increment())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);
