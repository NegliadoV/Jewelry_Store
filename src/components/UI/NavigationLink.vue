<script setup>
defineProps({
  text: String
})
</script>

<template>
  <li class="nav__link">
    <a href="/">{{ text }}</a>
  </li>
</template>
