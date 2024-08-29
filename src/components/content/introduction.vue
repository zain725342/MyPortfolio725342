<script setup lang="ts">
import image from "../../assets/headshot.jpg";
const props = defineProps(["side"]);
</script>
<template>
  <div>
    <div v-if="side == 'left'">
      <div
        class="h-[550px] max-h-[550px] overflow-hidden w-[340px] sm:w-[430px] flex flex-col gap-y-3 justify-start sm:text-lg text-sm"
      >
        <div class="flex gap-x-3 h-[280px] sm:h-[330px] lg:h-full">
          <img class="h-full w-auto rounded-md" :src="image" />
          <p
            class="text-justify max-h-full overflow-hidden lg:hidden block text-white mt-[-3px]"
          >
            Welcome to my portfolio. I'm Zain Ul Abdin, a dedicated and
            passionate software engineering graduate with a keen focus on
            frontend web development. As a frontend web developer,
          </p>
        </div>
        <div class="lg:hidden block">
          <p class="text-justify text-white">
            I specialize in crafting user-friendly and responsive websites that
            not only meet the aesthetic standards but also enhance user
            experience. My expertise lies in transforming complex problems into
            seamless digital solutions, ensuring that businesses thrive in the
            online realm. I believe that a well-designed website is a crucial
            element in today's digital age, and I am committed to helping my
            clients achieve their goals through innovative and effective web
            solutions.
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-y-4">
        <div>
          <h3 class="text-4xl text-white font-semibold">Introduction...</h3>
        </div>
        <div class="text-lg text-justify text-white h-[430px] w-[430px]">
          <p>
            Welcome to my portfolio. I'm Zain Ul Abdin, a dedicated and
            passionate software engineering graduate with a keen focus on
            frontend web development.
          </p>
          <br />
          <p>
            As a frontend web developer, I specialize in crafting user-friendly
            and responsive websites that not only meet the aesthetic standards
            but also enhance user experience.
          </p>
          <br />
          <p>
            I believe that a well-designed website is a crucial element in
            today's digital age.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
