<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import FilterLink from './UI/FilterLink.vue'
import RangeSlider from './UI/RangeSlider.vue'
import CheckboxGroup from './UI/CheckboxGroup.vue'
import InputCheckbox from './UI/InputCheckbox.vue'

const sliderMin = ref(0)
const sliderMax = ref(1500000)

const categories = ref([])

const materials = ref([])

const switches = ref([])

const materialsOptions = ref([])

const catigoriesValue = ref([])
const materialsValue = ref([])

const switchValue = ref({})

const getCategories = async () => {
  try {
    const { data } = await axios.get('https://5cec9268c50dffcc.mokky.dev/catigories')

    categories.value = data.map((obj) => ({
      ...obj,
      categoriesId: obj.categoriesID,
      text: obj.categoriesName
    }))
  } catch (err) {
    console.error(err)
  }
}

const getMaterials = async () => {
  try {
    const { data } = await axios.get('https://5cec9268c50dffcc.mokky.dev/materials', {})
    materials.value = data.map((obj) => {
      return {
        ...obj,
        id: obj.id,
        name: obj.materialName,
        checked: obj.boolean,
        optionsKey: obj.options_Id
      }
    })
  } catch (err) {
    console.error(err)
  }
}

const getMaterialsOptions = async () => {
  try {
    const { data } = await axios.get('https://5cec9268c50dffcc.mokky.dev/options', {})
    materialsOptions.value = data.map((obj) => {
      return {
        ...obj,
        optionsId: obj.id,
        optionsName: obj.name,
        optionsKey: obj.options_Id,
        optionsChecked: obj.boolean
      }
    })
  } catch (err) {
    console.error(err)
  }
}

const getSwitch = async () => {
  try {
    const { data } = await axios.get('https://5cec9268c50dffcc.mokky.dev/switch')

    switches.value = data.map((obj) => ({
      ...obj,
      subId: obj.id,
      name: obj.name,
      checked: obj.boolean
    }))
  } catch (err) {
    console.error(err)
  }
}

onMounted(async () => {
  await getCategories(), await getMaterials(), await getMaterialsOptions(), await getSwitch()
})
</script>

<template>
  <div class="drawer">
    <div class="drawer__hide">
      <img src="/public/close.svg" alt="№" class="close" />
      <div>Спрятать фильтры</div>
    </div>
    <div class="drawer__body">
      <article class="drawer__accordion">
        <input class="input__hide" type="checkbox" id="article_type" checked />
        <label class="label__hide" for="article_type">
          <h2 class="accordion__title">Тип изделия</h2>
        </label>
        <div class="accordion__content" v-for="category in categories" :key="category">
          <FilterLink :text="category.text" />
        </div>
      </article>

      <article class="drawer__accordion">
        <input class="input__hide" type="checkbox" id="article_price" checked />
        <label class="label__hide" for="article_price">
          <h2 class="accordion__title">Цена</h2>
        </label>
        <div class="accordion__content">
          <RangeSlider :max="1500000" v-model:min-value="sliderMin" v-model:max-value="sliderMax" />
        </div>
      </article>

      <article class="drawer__accordion">
        <input class="input__hide" type="checkbox" id="article_material" checked />
        <label class="label__hide" for="article_material">
          <h2 class="accordion__title">Материал</h2>
        </label>

        <div class="accordion__content">
          <CheckboxGroup
            :options="materials"
            :subOptions="materialsOptions"
            v-model:value="materialsValue"
          />
        </div>
      </article>
      <div class="drawer__switch">
        <div v-for="switchItem in switches" :key="switchItem">
          <InputCheckbox
            :checked="switchItem.checked"
            :value="switchItem.name"
            :label="switchItem.name"
            :type="'switch'"
            :subId="switchItem.subId"
            :name="switchItem.id"
            v-model:value="switchValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
