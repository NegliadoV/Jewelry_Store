<script setup>
import { ref } from 'vue'
import Button from './UI/Button.vue'

const isAdded = ref(false)

const emit = defineEmits(['onClickAdd'])

const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  imageUrl: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  attribute: {
    type: String,
    default: ''
  },
  isSale: {
    type: Boolean,
    default: false
  },
  salePrice: {
    type: Number,
    default: 0
  }
})

const onClickAdd = () => {
  emit('onClickAdd', {
    id: props.id,
    imageUrl: props.imageUrl,
    title: props.title,
    price: props.price,
    isSale: props.isSale,
    salePrice: props.salePrice || null,
    isAdded: isAdded.value
  })
  isAdded.value = !isAdded.value
}
</script>

<template>
  <div class="cart">
    <div class="cart__img-wrap">
      <div class="cart__sale" v-if="isSale">SALE</div>
      <img class="cart__img" :src="imageUrl" alt="#" />
    </div>
    <div class="cart__info">
      <div class="cart__price-wrap">
        <b class="cart__price">{{ price }} ₽</b>
        <p class="cart__price-sale" v-if="isSale">{{ salePrice }} ₽</p>
      </div>
      <p class="cart__title">{{ title }}</p>
      <Button
        :text="isAdded === false ? 'Добавить в корзину' : 'Добавлено'"
        @click="onClickAdd($event)"
        :class="{ disabled: isAdded }"
      />
    </div>
  </div>
</template>
