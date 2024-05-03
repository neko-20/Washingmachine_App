<template>
  <v-card class="mx-auto my-6" max-width="90%" elevation="4" @click="emit('update:modelValue', true)">
    <v-img height="200" :src="imageSrc(item.prdimg)" class="mt-3"/>
    <v-card-item>
      <v-card-title v-text="item.prdname" class="wrap-text"/>
      <v-card-subtitle v-text="item.prdmaker" class="wrap-text"/>
    </v-card-item>
    <v-card-text>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">評価</th>
            <th class="text-left">タイトル</th>
            <th class="text-left">レビュー</th>
            <th class="text-left">備考</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.comment">
            <td>{{ item.star }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.comment }}</td>
            <td>{{ item.detail }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const props = defineProps({
    item: {
      type: Object,
      default: {}
    }
  });
  const emit = defineEmits(['update:modelValue']);
  const data = ref([]);
  axios.get('/api/comment', {
    params: {
      prdname: props.item.prdname
    }
  }).then((response) => {
    data.value = response.data;
  }).catch((error) => {
    console.log(error);
  });
  const imageSrc = (fname) => {
    return "/static/image/" + fname;
  }
</script>

<style scoped>
.wrap-text {
  text-overflow: inherit;
  white-space: unset;
}
</style>
