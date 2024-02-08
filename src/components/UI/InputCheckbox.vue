<script setup>
const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  optionsKey: {
    type: Number,
    default: null
  },
  id: {
    type: Number || String,
    default: '' || 0
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },

  subName: {
    type: String,
    default: ''
  },
  subId: {
    type: String,
    default: ''
  },
  subLabel: {
    type: String,
    default: ''
  },
  optionsChecked: {
    type: Boolean,
    default: false
  },
  subValue: {
    type: String,
    default: ''
  },

  group: {
    type: Boolean,
    default: false
  },

  subGroup: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'checkbox'
  }
})

const handleClick = (event) => {
  if (props.group) {
    emits('updateCheckboxGroup', {
      optionId: props.id,
      checked: event.target.checked,
      name: props.name
    })
  }
  if (props.subGroup) {
    emits('updateCheckboxGroup', {
      subOptionId: props.subId,
      optionsChecked: event.target.checked,
      subName: props.subName
    })
  } else {
    emits('update:checked', event.target.checked || event.target.optionsChecked)
  }
}
</script>

<template>
  <div
    :class="
      type === 'checkbox'
        ? 'input__checkbox-wrapper '
        : '' || type === 'switch'
          ? 'input__checkbox-wrapper switch'
          : ''
    "
  >
    <div :class="type === 'switch' ? 'switch__container' : ''"></div>
    <input
      :class="
        type === 'checkbox' ? 'input__checkbox' : '' || type === 'switch' ? 'input__switch' : ''
      "
      type="checkbox"
      :optionsKey="optionsKey"
      :name="name || subName"
      :id="id"
      :subId="subId"
      :value="value || subValue"
      :checked="checked || optionsChecked"
      @input="handleClick($event)"
    />
    <label class="switch__label" :for="subId" v-if="type === 'switch'">{{ label }}</label>
    <label class="label__checkbox" :for="id || subId">{{ label || subLabel }}</label>
  </div>
</template>
