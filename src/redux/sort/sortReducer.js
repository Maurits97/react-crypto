import { SORT_CRYPTOS } from "./sortTypes"

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';
const CURRENT_COLUMN = 'market_cap'

const defaultSortOrder = SORT_DESC;

const initialState = {
  sortOrder: defaultSortOrder,
  currentColumn: CURRENT_COLUMN
}

const sortReducer = (state = initialState, action) => {
  
  switch(action.type){
    case SORT_CRYPTOS:
      const cryptos = action.payload.cryptoData.cryptos;
      const sortingElement = action.payload.cryptoSortElement;
      state.currentColumn = sortingElement
      let newSortOrder;

      if(state.sortOrder === SORT_ASC){
        newSortOrder = SORT_DESC

        if (sortingElement === 'name') {
          cryptos.sort((a, b) => a[sortingElement] > b[sortingElement] ? -1 : 1)
        } else {
          cryptos.sort((a, b) => a[sortingElement] - b[sortingElement])
        }
      } else {

        newSortOrder = SORT_ASC
        if (sortingElement === 'name') {
          cryptos.sort((a, b) => a[sortingElement] > b[sortingElement] ? 1 : -1)
        } else {
          cryptos.sort((a, b) => b[sortingElement] - a[sortingElement])
        }
      }
      

      return {
        ...state,
        sortOrder: newSortOrder,
      }    
      
      default: return state
  }
}

export default sortReducer