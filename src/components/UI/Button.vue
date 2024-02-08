<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <button class="button">{{ text }}</button>
  </div>
</template>
