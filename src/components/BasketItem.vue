<script setup>
import { ref } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
import InputCheckbox from './UI/InputCheckbox.vue'

const basketStore = useBasketStore()

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
  isSale: {
    type: Boolean,
    default: false
  },
  salePrice: {
    type: Number,
    default: 0
  },
  isAdded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  {{ basketStore.quantity }}
  {{ basketStore.products }}
  <div class="basket__checkbox">
    <InputCheckbox :checked="true" />
  </div>
  <div class="basket__item">
    <div class="basket__img-wrap">
      <div class="basket__sale-percent" v-if="isSale">
        {{ ((price - salePrice) / price) * 100 }}%
      </div>
      <img class="basket__img" :src="imageUrl" alt="#" />
    </div>

    <div class="basket__info">
      <div class="basket__title">
        <p>{{ title }}</p>
        <div class="basket__article">Артикул: {{ id }}</div>
      </div>

      <div class="select__ring">
        <select class="search__select">
          <option class="select__option" value="15">15</option>
          <option class="select__option" value="16">16</option>
          <option class="select__option" value="17">17</option>
          <option class="select__option" value="17">17</option>
          <option class="select__option" value="18">18</option>
          <option class="select__option" value="19">19</option>
          <option class="select__option" value="20">20</option>
          <option class="select__option" value="21">21</option>
          <option class="select__option" value="22">22</option>
        </select>
      </div>

      <div class="basket__btn">
        <button @click="basketStore.quantity++" class="btn__increment"></button>
        <span class="btn__number">{{ basketStore.quantity <= 0 ? 1 : basketStore.quantity }}</span>
        <button
          @click="onClickRemove(basketStore.quantity < 1 ? 1 : basketStore.addQuantity)"
          class="btn__increment"
        ></button>
      </div>
      <div class="basket__price">
        <b class="price">{{ price * quantity ? price * quantity : +price }} ₽</b>
        <p v-if="isSale" class="price__sale">
          {{ salePrice * quantity ? salePrice * quantity : +salePrice }} ₽
        </p>
      </div>
      <button class="basket__delete">
        <img class="basket__button-img" src="/close.svg" alt="close" />
      </button>
    </div>
  </div>
</template>
