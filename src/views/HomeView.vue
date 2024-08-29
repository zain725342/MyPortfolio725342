<script setup lang="ts">
import sectionBar from "../components/sections/sectionBar.vue";
import sectionContainer from "../components/sections/sectionContainer.vue";
import leftContentContainer from "@/components/sections/leftContentContainer.vue";
import rightContentContainer from "@/components/sections/rightContentContainer.vue";
import imageView from "@/components/sections/imageView.vue";
import { useVariablesStore } from "../stores/variables";
import { onMounted, ref } from "vue";

const store = useVariablesStore();

const transitionFlag = ref(false);

const activeImage = ref(null);

const currentElement = ref(0);

const elements = ref([true, false, false, false, false]);

const direction = ref("forward");

const hide = (index: number) => {
  if (index < elements.value.length) {
    elements.value[index] = false;
    if (store.section - 1 > currentElement.value) {
      direction.value = "forward";
    } else {
      direction.value = "backward";
    }
    currentElement.value = store.section - 1;
  }
};
const unhide = (index: number) => {
  transitionFlag.value = true;
  if (index < elements.value.length) {
    elements.value[index] = true;
    scrollFlag.value = true;
  }
};

const moveSection = (nextSection: number) => {
  if (nextSection <= 5 && nextSection >= 1) {
    store.setValue(nextSection);
  }
};

const scrollFlag = ref(true);

var scrollableElement = document.body;

scrollableElement.addEventListener("wheel", checkScrollDirection);

function checkScrollDirection(event: any) {
  if (checkScrollDirectionIsUp(event)) {
    if (scrollFlag.value && store.section > 1) {
      scrollFlag.value = false;
      moveSection(store.section - 1);
    }
  } else {
    if (scrollFlag.value && store.section < 5) {
      scrollFlag.value = false;
      moveSection(store.section + 1);
    }
  }
}

function checkScrollDirectionIsUp(event: any) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

onMounted(() => {
  store.setValue(1);
});
</script>

<template>
  <main class="h-screen overflow-hidden relative font-mono">
    <imageView
      v-if="activeImage"
      :image="activeImage"
      @close="
        activeImage = null;
        scrollFlag = true;
      "
    />
    <div
      class="w-full flex flex-col justify-center pt-4 overflow-hidden h-screen bg-secondary relative"
    >
      <section class="flex justify-between">
        <sectionContainer
          side="left"
          :section="store.section"
          :scrollFlag="scrollFlag"
        >
          <div v-for="(el, index) in elements">
            <div
              v-if="elements[index]"
              :class="
                store.section - 1 == 0 && !transitionFlag
                  ? ''
                  : store.section - 1 > currentElement
                  ? 'animate-slide-out-up'
                  : store.section - 1 < currentElement
                  ? 'animate-slide-out-down'
                  : store.section - 1 == currentElement &&
                    direction == 'forward'
                  ? 'animate-slide-in-up'
                  : 'animate-slide-in-down'
              "
              @animationend="
                store.section - 1 == currentElement
                  ? unhide(currentElement)
                  : hide(currentElement)
              "
            >
              <leftContentContainer
                :index="index"
                @open-image="
                  activeImage = $event;
                  scrollFlag = false;
                "
              />
            </div>
          </div>
        </sectionContainer>
        <sectionBar
          class="lg:flex hidden"
          :section="store.section"
          @switch="moveSection($event)"
        />
        <sectionContainer
          side="right"
          :section="store.section"
          :scrollFlag="scrollFlag"
        >
          <div v-for="(el, index) in elements">
            <div
              v-if="elements[index]"
              :class="
                store.section - 1 == 0 && !transitionFlag
                  ? ''
                  : store.section - 1 > currentElement
                  ? 'animate-slide-out-up'
                  : store.section - 1 < currentElement
                  ? 'animate-slide-out-down'
                  : store.section - 1 == currentElement &&
                    direction == 'forward'
                  ? 'animate-slide-in-up'
                  : 'animate-slide-in-down'
              "
              @animationend="
                store.section - 1 == currentElement
                  ? unhide(currentElement)
                  : hide(currentElement)
              "
            >
              <rightContentContainer
                :index="index"
                @next="moveSection(store.section + 1)"
              />
            </div>
          </div>
        </sectionContainer>
      </section>
    </div>
  </main>
</template>
