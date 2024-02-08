import { defineStore } from 'pinia'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const cards = ref([])

  const getCard = async () => {
    try {
      const { data } = await axios.get(`https://5cec9268c50dffcc.mokky.dev/products`)
      cards.value = data.map((obj) => ({
        ...obj,
        id: obj.id,
        name: obj.name,
        price: obj.price,
        salePrice: obj.salePrice,
        imageUrl: obj.imgUrl,
        isSale: obj.saleBool,
        isAdded: false
      }))
    } catch (err) {
      console.error(err)
    }
  }

  onMounted(async () => await getCard())
  return { cards, getCard }
})
