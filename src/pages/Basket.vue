<script setup>
import { ref } from 'vue'
import FilterLink from '@/components/UI/FilterLink.vue'
import InputCheckbox from '@/components/UI/InputCheckbox.vue'
import BasketListItem from '@/components/BasketListItem.vue'
import BasketTotal from '@/components/BasketTotal.vue'
import { useBasketStore } from '@/stores/BasketStore.js'

const basketStore = useBasketStore()

const totalPrice = ref(null)
totalPrice.value = basketStore.products
  .map((product) => product.price)
  .reduce((a, b) => a * basketStore.quantity + b, 0)

// const totalSalePrice = ref(null)
// totalSalePrice.value = basketStore.products.value
//   .map((product) => product.salePrice)
//   .reduce((a, b) => a * basketStore.quantity + b, 0)
</script>

<template>
  {{ basketStore.totalPrice }}
  {{ basketStore.totalSalePrice }}
  {{ quantity }}
  <div class="basket">
    <div class="basket__top">
      <h2 class="basket__title">Корзина</h2>
      <p class="basket__length">{{ basketStore.products.length }}</p>
    </div>

    <div class="basket__inner">
      <div class="basket__products">
        <div class="basket__filter">
          <InputCheckbox :checked="false" :label="'Выбрать все'" />
          <FilterLink class="basket__all-remove" :text="'Удалить выбранное'" />
        </div>
        <BasketListItem :options="basketStore.products" />
      </div>
      <BasketTotal :totalPrice="totalPrice" :totalSale="basketStore.totalSalePrice" />
    </div>
  </div>
</template>
