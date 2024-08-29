<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useReviewsStore } from "../../stores/reviews";
const props = defineProps(["side"]);

const { reviews } = useReviewsStore();

const reviewIndex = ref(0);

const transitionFlag = ref(false);
const startFlag = ref(true);

const activateReview = () => {
  if (reviewIndex.value < reviews.length - 1) {
    reviewIndex.value++;
  } else {
    reviewIndex.value = 0;
  }
  reviews.forEach((r) => {
    if (r == reviews[reviewIndex.value]) {
      r.active = true;
      transitionFlag.value = true;
    } else {
      r.active = false;
    }
  });
};
onUnmounted(() => {
  reviews.forEach((r, index) => {
    if (index == 0) {
      r.active = true;
    } else {
      r.active = false;
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
      <div class="h-[550px] max-h-[550px] flex items-center">
        <div
          class="scrollable-container scrollable-content sm:h-full sm:max-h-full h-[380px] max-h-[380px] overflow-y-scroll w-[340px] sm:w-[430px] bg-secondary-light flex flex-col gap-y-2 justify-between items-center rounded-md px-8 pt-12 pb-8 shadow-md"
        >
          <div class="flex">
            <div v-for="(review, index) in reviews">
              <div
                v-if="review.active"
                class="flex flex-col gap-y-6 justify-start items-center"
                :class="
                  startFlag
                    ? ''
                    : transitionFlag
                    ? 'animate-fade-in-right'
                    : 'animate-fade-out-left'
                "
                @animationend="!transitionFlag ? activateReview() : ''"
              >
                <div
                  class="w-full flex flex-col gap-y-2 items-center justify-center text-white"
                >
                  <div
                    class="sm:w-24 sm:h-24 w-16 h-16 flex justify-center items-center sm:text-7xl text-4xl rounded-full bg-secondary"
                  >
                    <Icon icon="ph:user" />
                  </div>
                  <div>
                    <span class="sm:text-lg text-md font-semibold">{{
                      review.name
                    }}</span>
                  </div>
                </div>
                <div class="flex">
                  <Icon
                    v-for="index in 5"
                    :icon="
                      index <= review.rating
                        ? 'solar:star-bold'
                        : 'solar:star-outline'
                    "
                    class="sm:text-4xl text-2xl"
                    :class="
                      index <= review.rating ? 'text-primary' : 'text-white'
                    "
                  />
                </div>
                <div
                  class="text-center sm:text-xl text-sm text-white max-h-[200px] overflow-hidden"
                >
                  <p>
                    {{ review.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-between items-center">
            <div class="flex gap-2">
              <div
                v-for="review in reviews"
                class="h-2 rounded-3xl"
                :class="
                  review.active
                    ? 'w-6 bg-primary transition-all duration-500 ease-in'
                    : 'w-2 bg-primary-dark transition-all duration-500 ease-in-out'
                "
              ></div>
            </div>
            <div
              @click="
                transitionFlag = false;
                startFlag = false;
              "
            >
              <Icon
                icon="formkit:arrowright"
                class="text-white hover:text-primary cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-y-4">
        <div>
          <h3 class="text-4xl text-white font-semibold">Reviews...</h3>
        </div>
        <div
          class="text-md text-justify text-white h-[430px] w-[430px] flex flex-col gap-y-3"
        >
          <div
            v-for="review in reviews"
            class="p-4 bg-secondary-light shadow-md rounded-md flex gap-2 justify-center h-auto border-l-primary border-l-8"
            :class="
              review.active
                ? 'border-l-primary transition-all duration-500 ease-in'
                : 'border-l-primary-dark transition-all duration-500 ease-in-out'
            "
          >
            <div class="w-[15%]">
              <div
                class="w-14 h-14 flex justify-center items-center text-4xl rounded-full bg-secondary"
              >
                <Icon icon="ph:user" />
              </div>
            </div>
            <div class="w-[85%] text-xs h-[65px]">
              <p class="max-h-[60px] overflow-hidden">
                {{ review.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
