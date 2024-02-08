<script setup>
import { computed, ref, watchEffect } from 'vue'

// define component props for the slider component
const { min, max, step, minValue, maxValue } = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  minValue: {
    type: Number || String,
    default: 0
  },
  maxValue: {
    type: Number || String,
    default: 0
  }
})

const emit = defineEmits(['update:minValue', 'update:maxValue'])

const slider = ref(null)
const sliderMinValue = ref(minValue)
const sliderMaxValue = ref(maxValue)

const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100
}

const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value)
})

const setCSSProps = (width, left, right) => {
  slider.value.style.setProperty('--width', `${width}%`)
  slider.value.style.setProperty('--progressLeft', `${left}%`)
  slider.value.style.setProperty('--progressRight', `${right}%`)
}

watchEffect(() => {
  if (slider.value) {
    emit('update:minValue', sliderMinValue.value)
    emit('update:maxValue', sliderMaxValue.value)

    const differencePercent = getPercent(sliderDifference.value, min, max)
    const leftPercent = getPercent(sliderMinValue.value, min, max)
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max)

    setCSSProps(differencePercent, leftPercent, rightPercent)
  }
})
</script>
<template>
  <div class="input__values">
    <div class="input__wrapper">
      <div class="input__separator">от</div>
      <input class="value" type="number" :step="step" v-model="sliderMinValue" />
    </div>
    <div class="input__wrapper">
      <div class="input__separator">до</div>
      <input class="value" type="number" :step="step" v-model="sliderMaxValue" />
    </div>
  </div>
  <div ref="slider" class="double_range_slider_box">
    <div class="double_range_slider">
      <input
        type="range"
        name="min"
        id="min"
        :min="min"
        :max="max"
        :value="minValue"
        :step="step"
        @input="({ target }) => (sliderMinValue = parseFloat(target.value))"
      />
      <input
        type="range"
        name="max"
        id="max"
        :min="min"
        :max="max"
        :value="maxValue"
        :step="step"
        @input="({ target }) => (sliderMaxValue = parseFloat(target.value))"
      />
    </div>
  </div>
</template>
