<template>
  <v-container v-if="flag">
    <v-card class="mx-auto pa-0" max-width="1200" :elevation="0">
      <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" single-line hide-details/>
    </v-card>
    <v-row>
      <v-col v-for="(item, i) in items.slice((page - 1) * pageSize, page * pageSize)" :key="i" class="d-flex mt-6" cols="12" sm="4" md="4" lg="4">
        <CardListItem :item="item" :modelValue="flag" @update:modelValue="onClick(item)"/>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="Math.ceil(items.length / pageSize)" total-visible="5" class="mt-1"/>
  </v-container>
  <CardDetail v-else :item="data" v-model="flag"/>
</template>

<script setup>
  import CardListItem from '@/components/CardListItem.vue'
  import CardDetail from '@/components/CardDetail.vue'
  import axios from 'axios'
  import { ref, computed } from 'vue'

  const props = defineProps({
    url: {
      type: String,
      required: true
    },
    filter: {
      type: Function,
      required: true
    }
  });

  const fetchData = ref([]);
  axios.get(props.url).then((response) => {
    fetchData.value = props.filter(response.data);
  }).catch((error) => {
    console.log(error);
  });

  const page = ref(1);
  const pageSize = 9;
  const search = ref("");

  const datas = ref([]);
  const items = computed(() => {
    page.value = 1;
    const text = search.value;
    datas.value = fetchData.value;
    if (text != "") {
      datas.value = datas.value.filter(item => (item.prdname.includes(text) || item.prdmaker.includes(text)));
    }
    return datas.value;
  });

  const flag = ref(true);
  const data = ref({});
  const onClick = (item) => {
    data.value = item;
    flag.value = false;
  }
</script>
