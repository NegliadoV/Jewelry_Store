<script setup>
import Card from './Card.vue'

const emit = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: Array,
    required: true
  },

  isAdded: {
    type: Boolean
  },

  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
      const hasBoolKey = value.every((option) => Object.keys(option).includes('isSale'))
      const hasPriceKey = value.every((option) => Object.keys(option).includes('price'))
      const hasSalePriceKey = value.every((option) => Object.keys(option).includes('salePrice'))
      const hasImageUrl = value.every((option) => Object.keys(option).includes('imageUrl'))

      return hasNameKey && hasIdKey && hasBoolKey && hasPriceKey && hasSalePriceKey && hasImageUrl
    }
  }
})

const clickAdd = (params) => {
  let updateValue = [...props.value]
  if (props.isAdded === false) {
    updateValue.push(params)
  } else {
    updateValue.slice(updateValue.indexOf(params), 1)
  }

  emit('update:value', updateValue)
  console.log(params)
}
</script>

<template>
  <div class="items" v-auto-animate>
    <Card
      v-for="option in options"
      :key="option.id"
      :id="option.id"
      :title="option.name"
      :imageUrl="option.imageUrl"
      :price="option.price"
      :isSale="option.isSale"
      :salePrice="option.salePrice"
      @onClickAdd="clickAdd"
    />
  </div>
</template>
