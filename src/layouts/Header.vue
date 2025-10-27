<!-- HEADER.VUE -->
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const mobileNav = ref(false);
const toggleMobileNav = () => (mobileNav.value = !mobileNav.value);

const router = useRouter();

const navigateToLogin = () => {
  router.push("/login");
};

const navigateToSignup = () => {
  router.push("/signup");
};
</script>

<template>
  <div class="w-full">
    <!-- Top Banner -->
    <div
      class="w-full bg-purple-50 py-2 flex items-center justify-center text-sm text-gray-700"
    >
      <div class="hidden md:flex items-center space-x-2">
        <span
          class="bg-purple-600 text-white font-semibold rounded-full px-3 py-1 text-xs"
          >New</span
        >
        <p>
          With <span class="font-semibold">Instant Submission</span>, you can
          generate and share a secure link with your customers for fast ticket
          creation anytime, anywhere.
        </p>
      </div>
    </div>

    <!-- Main Navbar -->
    <header class="flex justify-between items-center px-8 py-6 shadow-sm">
      <!-- Logo -->
      <div class="text-3xl font-extrabold text-gray-900">
        Tick<span class="text-purple-600">r</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" class="hover:text-purple-600 transition">Customers</a>
        <a href="#" class="hover:text-purple-600 transition">Pricing</a>
        <a href="#" class="hover:text-purple-600 transition">Learn</a>
        <a href="#" class="hover:text-purple-600 transition">Developers</a>
        <a href="#" class="hover:text-purple-600 transition">Support</a>
      </nav>

      <div class="hidden md:flex flex-row space-x-3 items-center">
        <button
          @click="navigateToLogin"
          class="bg-white border-2 border-purple-800 text-purple-800 px-4 py-2.5 hover:bg-gray-200 rounded-full text-sm font-medium flex items-center justify-center"
        >
          Login
        </button>
        <button
          @click="navigateToSignup"
          class="bg-purple-800 text-white px-4 py-2.5 rounded-full hover:bg-gray-400 text-sm font-medium flex items-center justify-center"
        >
          Sign Up
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileNav" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div
        v-if="mobileNav"
        class="md:hidden bg-white border-t border-gray-200 py-4 shadow-lg"
      >
        <nav class="flex flex-col items-center space-y-4 text-gray-800">
          <a href="#" class="hover:text-purple-600">Customers</a>
          <a href="#" class="hover:text-purple-600">Pricing</a>
          <a href="#" class="hover:text-purple-600">Learn</a>
          <a href="#" class="hover:text-purple-600">Developers</a>
          <a href="#" class="hover:text-purple-600">Support</a>
          <div class="flex flex-col mt-4 space-y-2 w-full px-8">
            <button
              @click="navigateToLogin"
              class="bg-white border-2 border-purple-800 text-purple-800 px-4 py-2.5 hover:bg-gray-200 rounded-full text-sm font-medium"
            >
              Login
            </button>
            <button
              @click="navigateToSignup"
              class="bg-purple-800 text-white px-4 py-2.5 rounded-full hover:bg-gray-400 text-sm font-medium"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
