<template>
  <CardList url="/api/data" :filter="filter"/>
</template>

<script setup>
  import CardList from '@/components/CardList.vue'

  const filter = (items) => {
    return items.filter(item => (item.text1.includes('サイズ') && item.text1.includes('コンパクト') || item.text1.includes('小ぶり') || item.text2.includes('サイズ') && item.text2.includes('コンパクト') || item.text2.includes('小ぶり') ));
  }
</script>

