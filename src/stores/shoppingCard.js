import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useShoppingCardStore = defineStore('shoppingCard', () => {
  const shoppingCard = ref([])

  const postShoppingCard = async () => {
    try {
      const isAdded = shoppingCard.value.map((obj) => obj.isAdded)
      if (isAdded.includes(false)) {
        await axios.post(`https://5cec9268c50dffcc.mokky.dev/bascket`, {
          cardBasket: shoppingCard.value
        })
        shoppingCard.value.forEach((obj) => (obj.isAdded = true))
        shoppingCard.value.splice(shoppingCard.value.indexOf(shoppingCard.value.id), 1)
      } else {
        return alert('товар уже добавлен в корзину')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return { shoppingCard, postShoppingCard }
})
