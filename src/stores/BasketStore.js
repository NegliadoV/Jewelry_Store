import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

export const useBasketStore = defineStore('basket', () => {
  const products = ref([])

  const quantityValue = ref(0)

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://5cec9268c50dffcc.mokky.dev/bascket?_relations=cardBasket`
      )
      products.value = data.flatMap((obj) =>
        obj.cardBasket.map((option) => ({
          ...option,
          id: option.id,
          title: option.title,
          price: option.price,
          salePrice: option.salePrice,
          imageUrl: option.imageUrl,
          isSale: option.isSale
        }))
      )
    } catch (err) {
      console.log(err)
    }
  }

  const addQuantity = () => {
    quantity.value += 1
  }

  const quantity = computed(() => {
    
    
    products.value.filter((obj) => {
      obj.id
    })
  })

  onMounted(async () => await getProduct())

  return { products, getProduct, quantity, addQuantity }
})
