<script setup>
import NavigationLink from './UI/NavigationLink.vue'
import Dropdown from './Dropdown.vue'
import { useShoppingCardStore } from '@/stores/shoppingCard'

const shoppingCardStore = useShoppingCardStore()

defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="header">
    <ul class="nav">
      <router-link to="/">
        <div class="nav__logo">
          <div class="logo__text">Логотип</div>
        </div>
      </router-link>
      <Dropdown @click="() => emit('openDrawer')" :text="'Каталог'" />
      <NavigationLink :text="'Магазины'" />
      <NavigationLink :text="'Акции'" />
      <NavigationLink :text="'Розыгрыш'" />
    </ul>

    <router-link to="/basket">
      <ul class="basket">
        <li class="basket__count">{{ shoppingCardStore.shoppingCard.length }}</li>
        <img src="/cart.svg" alt="Корзина" class="basket__img" />
      </ul>
    </router-link>
  </header>
</template>
