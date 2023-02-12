import { defineStore } from 'pinia'

export const useGlobalSatateStore = defineStore('globalState', () => {
  const cartProducts = []
  const favProducts = []
  const currentPage = ""

  return { cartProducts, favProducts, currentPage }
})
