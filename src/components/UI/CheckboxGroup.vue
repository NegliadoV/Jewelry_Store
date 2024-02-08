<script setup>
import InputCheckbox from './InputCheckbox.vue'

const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    required: true
  },

  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
      const hasBoolKey = value.every((option) => Object.keys(option).includes('boolean'))
      const hasKey = value.every((option) => Object.keys(option).includes('optionsKey'))

      return hasNameKey && hasIdKey && hasBoolKey && hasKey
    }
  },

  subOptions: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('optionsName'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('optionsId'))
      const hasBoolKey = value.every((option) => Object.keys(option).includes('optionsChecked'))
      const hasKey = value.every((option) => Object.keys(option).includes('optionsKey'))

      return hasNameKey && hasIdKey && hasBoolKey && hasKey
    }
  }
})

const check = (params) => {
  let updateValue = [...props.value]
  if (params.checked) {
    updateValue.push(params)
  } else if (params.optionsChecked) {
    updateValue.push(params)
  } else {
    updateValue.splice(updateValue.indexOf(params.optionId), 1)
  }
  emit('update:value', updateValue)
}
</script>

<template>
  <ul class="checkbox__group" v-for="option in options" :key="option.id">
    <InputCheckbox
      :type="'checkbox'"
      :optionsKey="option.optionsKey"
      :label="option.name"
      :id="option.id"
      :name="option.name"
      :value="option.name"
      :checked="option.boolean"
      group
      @updateCheckboxGroup="check"
    />
    <template v-for="subOption in subOptions" :key="subOption.optionsId">
      <li v-if="option.optionsKey === subOption.optionsKey" class="checkbox__options">
        <InputCheckbox
          :type="'checkbox'"
          :subLabel="subOption.optionsName"
          :subId="subOption.optionsId"
          :subName="subOption.optionsName"
          :subValue="subOption.optionsName"
          :optionsChecked="subOption.optionsChecked"
          subGroup
          @updateCheckboxGroup="check"
        />
      </li>
    </template>
  </ul>
</template>
