import { FETCH_COIN_AMOUNT } from './amountTypes'

export const fetchCoinAmount = (number = 1) => {
  return {
    type: FETCH_COIN_AMOUNT,
    payload: number
  }
}

