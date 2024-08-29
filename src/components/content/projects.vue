<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useProjectsStore } from "../../stores/projects";
const props = defineProps(["side"]);
const emit = defineEmits(["openImage"]);

const { projects } = useProjectsStore();

const scrollPosition = ref(0);
let scrollInterval: any = null;

const startScrolling = () => {
  scrollInterval = setInterval(() => {
    const container = document.querySelector(".scrollable-container");
    const maxScrollHeight =
      (container as any).scrollHeight - (container as any).clientHeight;

    if (scrollPosition.value >= maxScrollHeight) {
      clearInterval(scrollInterval);
      return;
    } else {
      scrollPosition.value += 1;
    }

    (container as any).scrollTop = scrollPosition.value;
  }, 10);
};

const stopScrolling = () => {
  clearInterval(scrollInterval);
  scrollPosition.value = 0;
  const container = document.querySelector(".scrollable-container");
  (container as any).scrollTop = scrollPosition.value;
};

const activateProject = (project: any) => {
  projects.forEach((p) => {
    if (p == project) {
      p.active = true;
    } else {
      p.active = false;
    }
  });
};

onUnmounted(() => {
  projects.forEach((p, index) => {
    if (index == 0) {
      p.active = true;
    } else {
      p.active = false;
    }
  });
});
</script>
<style scoped>
.scrollable-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollable-content::-webkit-scrollbar {
  display: none;
}
</style>
<template>
  <div>
    <div v-if="side == 'left'">
      <div
        class="flex flex-col gap-y-6 h-[550px] max-h-[550px] overflow-y-hidden sm:w-[430px] w-[340px]"
      >
        <div
          @mouseover="startScrolling"
          @mouseleave="stopScrolling"
          class="scrollable-container scrollable-content lg:h-[550px] lg:max-h-[550px] h-[180px] max-h-[180px] overflow-y-scroll sm:w-[430px] w-full flex justify-between items-start rounded-md"
        >
          <div v-for="project in projects">
            <img
              @click="emit('openImage', project.image)"
              v-show="project.active"
              class="h-auto w-full rounded-md cursor-zoom-in"
              :src="project.image"
            />
          </div>
        </div>
        <div class="lg:hidden flex flex-col gap-y-4 text-md text-white">
          <div
            @click="activateProject(project)"
            v-for="project in projects"
            class="p-4 overflow-hidden bg-secondary-light shadow-md rounded-md flex gap-x-2 cursor-pointer"
          >
            <div class="w-[5%]">
              <div
                class="w-3 h-3 rounded-full bg-primary mt-1"
                :class="
                  project.active
                    ? 'bg-primary transition-all duration-200'
                    : 'bg-secondary border border-white transition-all duration-200'
                "
              ></div>
            </div>
            <div class="w-[95%]">
              <p>
                {{ project.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="lg:hidden flex">
          <div v-for="(project, index) in projects">
            <p
              v-if="project.active"
              class="text-white text-justify sm:text-md text-sm"
            >
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-y-4">
        <div>
          <h3 class="text-4xl text-white font-semibold">Projects...</h3>
        </div>
        <div
          class="text-md text-justify text-white h-[430px] w-[430px] flex flex-col gap-y-4"
        >
          <div
            @click="activateProject(project)"
            v-for="project in projects"
            class="p-4 bg-secondary-light shadow-md rounded-md flex cursor-pointer"
          >
            <div class="w-[5%]">
              <div
                class="w-3 h-3 rounded-full bg-primary mt-1"
                :class="
                  project.active
                    ? 'bg-primary transition-all duration-200'
                    : 'bg-secondary border border-white transition-all duration-200'
                "
              ></div>
            </div>
            <div class="w-[95%]">
              <p>
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
