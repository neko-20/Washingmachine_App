<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('洗浄') && item.text1.includes('良い')|| item.text2.includes('洗浄') && item.text2.includes('良い')));
  }
</script>