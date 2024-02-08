<script setup>
import Button from './UI/Button.vue'

defineProps({
  totalPrice: {
    type: Number,
    default: 0
  },
  totalSale: {
    type: Number,
    default: 0
  },
  totalDelivery: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="basket__total-container">
    <div class="basket__total">
      <div class="total__text">К оплате</div>
      <div class="total__price-amount">{{ totalSale }} ₽</div>
    </div>
    <div class="basket__length">
      <div class="total__products">товаров на сумму</div>
      <div class="total__price-noAmount">{{ totalPrice }} ₽</div>
    </div>
    <div class="total__sale">
      <div class="total__sale-text">Скидка</div>
      <div class="total__sale-amount">{{ totalPrice - totalSale }} ₽</div>
    </div>
    <div class="total__delivery">
      <div class="total__delivery-text">Доставка</div>
      <div class="total__delivery-amount">{{ totalDelivery }} ₽</div>
    </div>
    <div class="total__promo">
      <input type="text" class="total__promo-input" placeholder="Ввсти промокод" />
    </div>
    <Button :text="'Оформить заказ'" />
  </div>
</template>
