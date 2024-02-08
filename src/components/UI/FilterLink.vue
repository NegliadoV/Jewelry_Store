<script setup>
defineProps({
  text: String
})
</script>

<template>
  <li class="dropdown__link">
    <a href="/">{{ text }}</a>
  </li>
</template>
