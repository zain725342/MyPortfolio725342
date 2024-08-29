<script setup lang="ts">
import introduction from "../content/introduction.vue";
import services from "../content/services.vue";
import projects from "../content/projects.vue";
import reviews from "../content/reviews.vue";
import contact from "../content/contact.vue";
const props = defineProps(["index"]);

const emit = defineEmits(["next"]);
</script>
<template>
  <div>
    <div class="lg:block hidden" v-if="index == 0">
      <introduction side="right" />
      <button
        @click="emit('next')"
        class="w-[170px] h-[40px] bg-primary flex justify-center items-center text-white rounded-md shadow-md mt-4"
      >
        What's Next?
      </button>
    </div>
    <div v-else-if="index == 1">
      <services side="right" />
      <button
        @click="emit('next')"
        class="w-[170px] h-[40px] bg-primary flex justify-center items-center text-white rounded-md shadow-md mt-4"
      >
        What's Next?
      </button>
    </div>
    <div v-else-if="index == 2">
      <projects side="right" />
      <button
        @click="emit('next')"
        class="w-[170px] h-[40px] bg-primary flex justify-center items-center text-white rounded-md shadow-md mt-4"
      >
        What's Next?
      </button>
    </div>
    <div v-else-if="index == 3">
      <reviews side="right" />
      <button
        @click="emit('next')"
        class="w-[170px] h-[40px] bg-primary flex justify-center items-center text-white rounded-md shadow-md mt-4"
      >
        What's Next?
      </button>
    </div>
    <div v-else-if="index == 4">
      <contact side="right" />
    </div>
  </div>
</template>
