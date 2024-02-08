<script setup>
import BasketItem from './BasketItem.vue'

defineProps({
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('title'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
      const hasBoolKey = value.every((option) => Object.keys(option).includes('isSale'))
      const hasPriceKey = value.every((option) => Object.keys(option).includes('price'))
      const hasSalePriceKey = value.every((option) => Object.keys(option).includes('salePrice'))
      const hasImageUrl = value.every((option) => Object.keys(option).includes('imageUrl'))
      const hasIsSaleKey = value.every((option) => Object.keys(option).includes('isSale'))

      return (
        hasNameKey &&
        hasIdKey &&
        hasBoolKey &&
        hasPriceKey &&
        hasSalePriceKey &&
        hasImageUrl &&
        hasIsSaleKey
      )
    }
  }
})
</script>

<template>
  <div div v-for="option in options" :key="option.id" class="basket__list" v-auto-animate>
    <BasketItem
      :id="option.id"
      :title="option.title"
      :price="option.price"
      :salePrice="option.salePrice"
      :imageUrl="option.imageUrl"
      :isSale="option.isSale"
    />
  </div>
</template>
