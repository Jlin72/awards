import React, { createContext, useReducer, useContext} from 'react';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch(action.type) {
    default:
      return;
    
    case 'ADDING_NOMINEE':
      return{
        ...state,
        nominees: [...state.nominees, action.nominee]
      }

    case 'REMOVING_NOMINEE': 
      return{
        ...state,
        nominees: [...action.nominees]
      }

    case 'ADDING_MOVIES': 
      return{
        ...state,
        movies: [...action.movies]
      }
  }
}

const StoreProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    nominees: [],
  })

  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };