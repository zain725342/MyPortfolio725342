<script setup lang="ts">
import introduction from "../content/introduction.vue";
import services from "../content/services.vue";
import projects from "../content/projects.vue";
import reviews from "../content/reviews.vue";
import contact from "../content/contact.vue";
const props = defineProps(["index"]);
const emit = defineEmits(["openImage"]);
</script>
<template>
  <div>
    <div v-if="index == 0">
      <introduction side="left" />
    </div>
    <div v-else-if="index == 1">
      <services side="left" />
    </div>
    <div v-else-if="index == 2">
      <projects side="left" @open-image="emit('openImage', $event)" />
    </div>
    <div v-else-if="index == 3">
      <reviews side="left" />
    </div>
    <div v-else-if="index == 4">
      <contact side="left" />
    </div>
  </div>
</template>
