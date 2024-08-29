<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["section"]);
const emit = defineEmits(["switch"]);

const sections = ref([true, false, false, false, false]);

const direction = ref("forward");

const startFlag = ref(true);

const prevSec = ref(1);

const hide = (index: any) => {
  startFlag.value = false;
  if (props.section > index) {
    direction.value = "forward";
  } else {
    direction.value = "backward";
  }
  sections.value[props.section - 1] = true;
  sections.value[prevSec.value - 1] = false;
  prevSec.value = props.section;
};
</script>
<template>
  <div
    class="max-h-[550px] h-[550px] w-[10%] overflow-hidden flex flex-col items-center justify-center py-0 gap-y-16 relative"
  >
    <hr
      class="w-[500px] text-white transform rotate-90 absolute z-0 border-2 border-dashed"
    />
    <div
      v-for="index in 5"
      class="z-10 relative max-h-[50px] overflow-hidden rounded-full"
    >
      <div
        v-if="sections[index - 1]"
        class="rounded-full bg-primary w-[50px] h-[50px] absolute shadow-md"
        :class="
          section - 1 == 0 && startFlag
            ? ''
            : index > section
            ? 'animate-slide-out-up'
            : index < section
            ? 'animate-slide-out-down'
            : index == section && direction == 'forward'
            ? 'animate-slide-in-down'
            : 'animate-slide-in-up'
        "
        @animationend="index == section ? '' : hide(index)"
      ></div>
      <div
        @click="emit('switch', index)"
        :key="index"
        class="bg-secondary border-white border-2 w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer"
      >
        <p class="text-3xl font-semibold text-white z-20">{{ index }}</p>
      </div>
    </div>
  </div>
</template>
