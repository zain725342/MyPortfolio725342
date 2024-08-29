<script setup lang="ts">
const props = defineProps(["side", "section", "scrollFlag"]);
</script>
<template>
  <div
    class="lg:max-h-[550px] max-h-[600px] lg:h-[550px] h-[600px] lg:w-[45%] overflow-hidden flex justify-center mt-20 lg:mt-0"
    :class="[side == 'left' ? 'w-full' : 'w-0']"
  >
    <slot></slot>
  </div>
</template>
