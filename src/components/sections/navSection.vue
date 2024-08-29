<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";
import { useVariablesStore } from "@/stores/variables";
import { ref, computed, watch } from "vue";

const store = useVariablesStore();

const route = useRoute();
const router = useRouter();

const isRoot = computed(() => route.path === "/");

const navUp = ref(true);
const navFlag = ref(false);

const sectionTitles = ref([
  "Introduction",
  "Services",
  "Projects",
  "Reviews",
  "",
]);

const toggleNav = (nav: boolean) => {
  if (nav == true) {
    navFlag.value = true;
    navUp.value = true;
  } else {
    navUp.value = false;
  }
};

const emit = defineEmits(["toggleNav"]);
</script>
<template>
  <main
    class="absolute h-screen w-screen overflow-hidden font-mono flex justify-center"
  >
    <nav
      class="lg:w-full w-[430px] h-16 bg-secondary flex items-center px-4 sm:px-0 lg:px-10 pt-4"
      :class="isRoot ? 'lg:justify-end justify-between' : 'justify-end'"
    >
      <div v-if="isRoot" class="z-10 flex items-center lg:hidden">
        <h3 class="sm:text-2xl text-xl text-white font-semibold">
          {{ sectionTitles[store.section - 1] }}
        </h3>
      </div>
      <div
        class="sm:w-10 sm:h-10 h-8 w-8 rounded-md flex justify-center items-center shadow-md z-30 cursor-pointer"
        :class="
          navFlag
            ? 'lg:bg-primary bg-secondary transition-colors duration-500 ease-out'
            : 'bg-primary transition-colors duration-500 ease-out'
        "
      >
        <span @click="toggleNav(!navFlag)">
          <Icon
            :icon="navFlag ? 'pajamas:close' : 'charm:menu-hamburger'"
            class="text-white sm:text-2xl text-lg"
          />
        </span>
      </div>
    </nav>
    <div
      v-if="navFlag"
      :class="
        navFlag && navUp ? 'animate-slide-in-up' : 'animate-slide-out-down'
      "
      @animationend="!navUp ? (navFlag = false) : ''"
      class="w-full lg:h-[200px] h-screen bg-primary absolute z-20 bottom-0 lg:rounded-tr-md lg:rounded-tl-md"
    >
      <div
        class="w-full h-full p-12 flex flex-col lg:flex-row lg:justify-around justify-center gap-y-6 items-center text-white text-2xl font-semibold"
      >
        <div
          @click="
            router.push({ name: 'home' });
            navUp = false;
          "
          class="hover:underline cursor-pointer"
        >
          <h3>Portfolio</h3>
        </div>
        <div
          @click="
            router.push({ name: 'blog' });
            navUp = false;
          "
          class="hover:underline cursor-pointer"
        >
          <h3>Blog</h3>
        </div>
        <div
          @click="
            router.push({ name: 'login' });
            navUp = false;
          "
          class="hover:underline cursor-pointer"
        >
          <h3>Personal Stuff</h3>
        </div>
      </div>
    </div>
    <div
      v-else-if="!navFlag && store.section != 5 && isRoot"
      class="w-full h-[30px] absolute z-20 bottom-0 lg:hidden flex justify-center"
    >
      <Icon
        icon="fa6-solid:chevron-down"
        class="text-white text-2xl animate-bounce"
      />
    </div>
  </main>
</template>
