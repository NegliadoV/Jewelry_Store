<script setup>
import FilterLink from './UI/FilterLink.vue'

defineProps({
  text: String
})
</script>

<template>
  <div class="nav__dropdown">
    <button class="dropdown__btn">{{ text }}</button>
    <div class="dropdown-content">
      <FilterLink :text="'Все изделия'" />
      <FilterLink :text="'Остатки'" />
      <FilterLink :text="'Предзаказ'" />
    </div>
  </div>
</template>
