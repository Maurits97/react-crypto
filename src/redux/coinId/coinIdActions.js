import { FETCH_COIN_ID } from './coinIdTypes'

export const fetchCoinId = (id) => {
  return {
    type: FETCH_COIN_ID,
    payload: id
  }
}

