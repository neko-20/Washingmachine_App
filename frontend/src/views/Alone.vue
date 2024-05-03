<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('一人暮らし') || item.text2.includes('一人暮らし')));
  }
</script>
