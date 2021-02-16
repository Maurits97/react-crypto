import { FETCH_COIN_AMOUNT } from './amountTypes'

export const fetchCoinAmount = (number) => {
  return {
    type: FETCH_COIN_AMOUNT,
    payload: number
  }
}

