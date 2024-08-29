<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const username = ref("");
const password = ref("");

const login = () => {
  username.value = "";
  password.value = "";
};
</script>
<template>
  <main
    class="h-screen overflow-hidden w-full bg-secondary font-mono relative text-mono"
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="h-[500px] lg:w-[800px] w-[340px] bg-secondary-light rounded-md p-8 flex flex-col justify-center gap-y-8"
      >
        <div class="w-full flex flex-col gap-y-4 items-center justify-center">
          <h3 class="sm:text-4xl text-2xl text-white font-semibold">
            Hi Zain!
          </h3>
          <p class="sm:text-lg text-sm text-white">Welcome Back</p>
        </div>
        <div class="w-full flex justify-center">
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="username" class="text-white">Username</Label>
            <Input
              v-model="username"
              id="username"
              type="text"
              placeholder="Username"
              class="bg-white sm:h-[40px] h-[30px]"
            />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password" class="text-white">Password</Label>
            <Input
              v-model="password"
              id="password"
              type="password"
              placeholder="Password"
              class="bg-white sm:h-[40px] h-[30px]"
            />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button
            class="sm:w-[130px] w-[80px] sm:h-[40px] h-[30px] bg-primary flex justify-center items-center text-white rounded-md shadow-md mt-4 hover:bg-primary-dark"
            @click="login()"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
