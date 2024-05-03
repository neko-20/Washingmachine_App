<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items;
  }
</script>
