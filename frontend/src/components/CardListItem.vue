<template>
  <v-card max-width="90%" min-width="380" height="440" class="d-flex flex-column" :elevation="4" @click="emit('update:modelValue', false)">
    <v-img height="120" :src="imageSrc(item.prdimg)" class="mt-3"/>
    <v-card-item>
      <v-card-title v-text="item.prdname" class="wrap-text"/>
      <v-card-subtitle v-text="item.prdmaker" class="wrap-text"/>
    </v-card-item>
    <v-card-text height="100%">
      <v-row align="center" class="mx-0">
        <v-rating :model-value="item.star" color="amber" density="compact" half-increments readonly size="small"/>
        <div class="text-grey ms-2 mt-1">
          {{item.star}}
        </div>
      </v-row>
      <div class="text-body-2 mt-6">
        頻出：{{item.text1.slice(0, 5).join(", ")}}
      </div>
      <div class="text-body-2 mt-4">
        特徴：{{item.text2.slice(0, 5).join(", ")}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
      default: {}
    }
  });
  const emit = defineEmits(['update:modelValue']);
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
