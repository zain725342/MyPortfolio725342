<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const props = defineProps(["side"]);

const quoteIndex = ref(0);

const quotes = ref([
  {
    quote:
      "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
    author: "Paul J. Meyer",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    quote:
      "The way to achieve your own success is to be willing to help somebody else get it first.",
    author: "Iyanla Vanzant",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Continuous improvement is better than delayed perfection.",
    author: "Mark Twain",
  },
  {
    quote:
      "You will never find time for anything. If you want time you must make it.",
    author: "Charles Buxton",
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou",
  },
]);
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
        class="flex lg:hidden py-24 flex-col sm:justify-between justify-around text-justify font-extrabold text-white h-[550px] max-h-[550px] sm:w-[430px] w-[340px]"
      >
        <div class="flex flex-col gap-y-6">
          <div>
            <h3 class="sm:text-8xl text-7xl">Let's Connect</h3>
          </div>
          <div class="flex justify-between">
            <div
              class="sm:w-16 sm:h-16 h-12 w-12 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://linkedin.com/in/zain725342" target="_blank">
                <Icon icon="mdi:linkedin" class="sm:text-5xl text-3xl" />
              </a>
            </div>
            <div
              class="sm:w-16 sm:h-16 h-12 w-12 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://x.com/zain725342" target="_blank">
                <Icon icon="prime:twitter" class="sm:text-4xl text-2xl" />
              </a>
            </div>
            <div
              class="sm:w-16 sm:h-16 h-12 w-12 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://github.com/zain725342" target="_blank">
                <Icon icon="mdi:github" class="sm:text-5xl text-3xl" />
              </a>
            </div>
            <div
              class="sm:w-16 sm:h-16 h-12 w-12 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://dev.to/zain725342" target="_blank">
                <Icon icon="fa6-brands:dev" class="sm:text-5xl text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>
            E-Mail:
            <a href="mailto:zain725342@proton.me">zain725342@proton.me</a>
          </h3>
        </div>
      </div>
      <div class="h-[550px] max-h-[550px] lg:flex items-center hidden">
        <div
          class="flex flex-col justify-between h-[350px] max-h-[550px] w-[430px] bg-secondary-light shadow-md rounded-md p-4 text-white"
        >
          <div
            @click="
              quoteIndex < quotes.length - 1 ? quoteIndex++ : (quoteIndex = 0)
            "
            class="w-full flex justify-end"
          >
            <Icon icon="pajamas:retry" class="cursor-pointer" />
          </div>
          <div class="max-h-[200px] overflow-hidden">
            <p class="text-center">
              {{ quotes[quoteIndex].quote }} - {{ quotes[quoteIndex].author }}
            </p>
          </div>
          <div>
            <span class="text-sm">&copy;2024-All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="flex py-24 flex-col justify-between text-justify font-extrabold text-white h-[550px] max-h-[550px] w-[430px]"
      >
        <div class="flex flex-col gap-y-6">
          <div>
            <h3 class="text-8xl">Let's Connect</h3>
          </div>
          <div class="flex justify-between">
            <div
              class="w-16 h-16 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://linkedin.com/in/zain725342" target="_blank">
                <Icon icon="mdi:linkedin" class="text-5xl" />
              </a>
            </div>
            <div
              class="w-16 h-16 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://x.com/zain725342" target="_blank">
                <Icon icon="prime:twitter" class="text-4xl" />
              </a>
            </div>
            <div
              class="w-16 h-16 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://github.com/zain725342" target="_blank">
                <Icon icon="mdi:github" class="text-5xl" />
              </a>
            </div>
            <div
              class="w-16 h-16 flex justify-center items-center cursor-pointer bg-secondary-light rounded-md hover:shadow-md"
            >
              <a href="https://dev.to/zain725342" target="_blank">
                <Icon icon="fa6-brands:dev" class="text-5xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>
            E-Mail:
            <a href="mailto:zain725342@proton.me">zain725342@proton.me</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
