<script setup lang="ts">
defineProps<{
  contributions: Contribution[]
}>()
</script>

<template>
  <WrappersCard
    v-for="item in contributions"
    :key="item.id"
    :item
  />
</template>
