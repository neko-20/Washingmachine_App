<template>
  <CardList url="/api/data2" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('ふんわり') || item.text2.includes('ふんわり')));
  }
</script>