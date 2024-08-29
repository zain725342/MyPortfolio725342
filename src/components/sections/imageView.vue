<script setup lang="ts">
const props = defineProps(["image"]);

const emit = defineEmits(["close"]);
</script>
<template>
  <div
    class="w-full h-screen bg-secondary absolute z-50 flex justify-center overflow-y-scroll"
  >
    <div
      @click="emit('close')"
      class="lg:w-[70%] w-full h-auto cursor-zoom-out"
    >
      <img :src="image" />
    </div>
  </div>
</template>
