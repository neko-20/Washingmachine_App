<template>
  <v-app :style="{background: '#d1e8ff'}">
    <v-app-bar color="blue lighten-3">
      <v-app-bar-title>
        Washing Machine Selection
      </v-app-bar-title>
      <v-btn small to="/">
        Home
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="select" bg-color="blue lighten-3">
          <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value" :to="tab.url">
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const select = ref("all");
  const tabs = [
    { text: 'すべて', value: 'all', url: '/' },
    { text: ' 一人暮らし', value: 'alone', url: '/Alone' },
    { text: '省エネ', value: 'eco', url: '/Eco' },
    { text: '洗浄力', value: 'washingpower', url: '/Washingpower' },
    { text: '夜間', value: 'night', url: '/Night' },
    { text: 'コンパクト', value: 'compact', url: '/Compact' },
    { text: '仕上がり', value: 'quality', url: '/Quality' },
    { text: 'エラー', value: 'error', url: '/Error' },
  ];
</script>

