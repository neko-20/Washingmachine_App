<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('静か') || item.text1.includes('インバータ') || item.text2.includes('静か')|| item.text2.includes('インバータ') ));
  }
</script>
  