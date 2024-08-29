<script setup lang="ts">
const props = defineProps(["side"]);
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const loaded = ref(false);

interface card {
  icon: string;
  text: string;
  flipped: boolean;
  showText: boolean;
  showIcon: boolean;
  styleClass?: string;
  transitionFlag?: boolean;
  loaded?: boolean;
}

const serviceCards = ref<card[]>([
  {
    icon: "mdi:vuejs",
    text: "I leverage Vue.js to build dynamic and responsive user interfaces that offer a smooth and interactive experience, ensuring your website adapts effortlessly to user interactions. ",
    flipped: false,
    showText: false,
    showIcon: true,
    styleClass: "lg:hover:text-[#42b883]",
    transitionFlag: false,
    loaded: false,
  },
  {
    icon: "mdi:laravel",
    text: "With Laravel, I provide a robust backend framework that streamlines development and enhances functionality, allowing for secure and scalable web applications. ",
    flipped: false,
    showText: false,
    showIcon: true,
    styleClass: "lg:hover:text-[#F05340]",
    transitionFlag: false,
    loaded: false,
  },
  {
    icon: "mdi:language-typescript",
    text: "Utilizing TypeScript ensures type safety and enhances code quality, leading to more reliable and maintainable applications tailored specifically to your business needs.",
    flipped: false,
    showText: false,
    showIcon: true,
    styleClass: "lg:hover:text-[#007acc]",
    transitionFlag: false,
    loaded: false,
  },
  {
    icon: "mdi:tailwind",
    text: "Tailwind CSS enables me to create visually appealing designs with a highly customizable utility-first approach, ensuring that your website looks modern and aligns with your brand's identity. ",
    flipped: false,
    showText: false,
    showIcon: true,
    styleClass: "lg:hover:text-[#a5f3fc]",
    transitionFlag: false,
    loaded: false,
  },
]);
</script>
<template>
  <div>
    <div v-if="side == 'left'">
      <div
        class="h-[550px] w-[340px] sm:w-[430px] flex lg:justify-between justify-center lg:gap-y-0 gap-y-6 items-center lg:flex-wrap flex-col lg:flex-row"
      >
        <div
          v-for="card in serviceCards"
          class="lg:w-[48%] w-full lg:h-[47%] h-[20%] lg:max-h-[47%] max-h-[20%] overflow-hidden"
          @click="card.flipped = true"
          @mouseleave="card.flipped = false"
        >
          <div
            class="w-full h-full bg-secondary-light shadow-md rounded-md flex lg:justify-center justify-between items-center px-2 lg:px-6 py-4"
          >
            <div v-if="!card.showText && !card.transitionFlag">
              <div
                class="lg:block flex justify-center items-center"
                :class="[
                  card.flipped
                    ? 'lg:animate-fade-out'
                    : card.loaded
                    ? 'lg:animate-fade-in'
                    : '',
                  card.showIcon ? 'opacity-1' : 'opacity-0',
                ]"
                @animationend="
                  card.flipped
                    ? ((card.showIcon = false),
                      (card.transitionFlag = true),
                      (card.loaded = true))
                    : (card.showIcon = true)
                "
              >
                <Icon
                  :icon="card.icon"
                  class="text-white text-[48px] sm:text-[54px] cursor-pointer transition-colors duration-300 w-[20%] lg:w-full"
                  :class="card.styleClass"
                />
                <p
                  class="lg:hidden block w-[80%] text-white text-xs sm:text-md"
                >
                  {{ card.text }}
                </p>
              </div>
            </div>
            <div v-else-if="!card.showIcon && card.transitionFlag">
              <p
                :class="[
                  card.flipped ? 'animate-fade-in' : 'animate-fade-out',
                  card.showText ? 'opacity-1' : 'opacity-0',
                ]"
                class="text-xs text-white"
                @animationend="
                  card.flipped
                    ? (card.showText = true)
                    : ((card.showText = false), (card.transitionFlag = false))
                "
              >
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-y-4">
        <div>
          <h3 class="text-4xl text-white font-semibold">Services...</h3>
        </div>
        <div class="text-lg text-justify text-white h-[430px] w-[430px]">
          <p>
            I offer a comprehensive range of frontend web development services
            designed to elevate your online presence. I create websites that
            effectively capture your brand's essence and engage visitors.
          </p>
          <br />
          <p>
            Additionally, I provide expert copywriting services to ensure your
            content not only informs but also persuades users to take action. I
            am dedicated to delivering solutions that enhance user experience
            and drive your business forward.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
