import { SORT_CRYPTOS, SORT_CRYPTOS_SUCCES } from './sortTypes'

export const sortCryptos = (cryptoSortElement, cryptoData) => {
  return {
    type: SORT_CRYPTOS,
    payload: {cryptoSortElement, cryptoData}
  }
}

export const sortCryptosSucces = cryptos => {
  return {
    type: SORT_CRYPTOS_SUCCES,
    payload: cryptos
  }
}