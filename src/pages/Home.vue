<script setup>
import Drawer from '@/components/Drawer.vue'
import CardList from '../components/CardList.vue'
import { useCardStore } from '@/stores/CardStore.js'
import { useShoppingCardStore } from '@/stores/shoppingCard'

const cardStore = useCardStore()

const shoppingCardStore = useShoppingCardStore()

// const filters = reactive({
//   sortBy: 'title',
//   searchQuery: ''
// })

// const onChangeSelect = (event) => {
//   filters.sortBy = event.target.value
// }
</script>

<template>
  {{ shoppingCardStore.shoppingCard }}
  <div class="search">
    <h2 class="search__title">Все изделия</h2>
    <div class="search__inner">
      <Drawer />
      <div>
        <div>
          <select @change="onChangeSelect" class="search__select">
            <option class="search__option" value="name">По популярности</option>
            <option class="search__option" value="price">По цене(Дешевые)</option>
            <option class="search__option" value="-price">По цене(Дорогие)</option>
          </select>
        </div>
        <div>
          <CardList
            :options="cardStore.cards"
            v-model:value="shoppingCardStore.shoppingCard"
            @click="shoppingCardStore.postShoppingCard()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
@/stores/shoppingCard
