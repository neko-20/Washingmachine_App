<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('偏り') || item.text1.includes('無限ループ') || item.text2.includes('偏り') || item.text2.includes('無限ループ')));
  }
</script>