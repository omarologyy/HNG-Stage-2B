<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const router = useRouter();

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = () => {
  const isValidEmail = /\S+@\S+\.\S+/.test(email.value);
  const isValidPassword = password.value.length >= 6;

  if (isValidEmail && isValidPassword) {
    // ✅ store session in localStorage
    localStorage.setItem(
      "ticketapp_session",
      JSON.stringify({ email: email.value })
    );

    alert("Welcome back!");
    router.push("/dashboard"); // navigate after storing session
  } else {
    alert("Invalid credentials. Redirecting to signup...");
    router.push("/signup");
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-200 flex items-center justify-center p-4">
    <div
      class="bg-white rounded-3xl shadow-lg p-6 sm:p-10 md:p-12 w-full max-w-sm sm:max-w-md"
    >
      <h1
        class="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-6 sm:mb-8"
      >
        Login
      </h1>

      <div class="space-y-5 sm:space-y-6">
        <!-- Email Input -->
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="user@example.com"
            class="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-600 text-gray-800"
          />
        </div>

        <!-- Password Input -->
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••"
            class="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-600 text-gray-800"
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            {{ showPassword ? "Hide" : "Show" }}
          </button>
        </div>

        <!-- Login Button -->
        <button
          @click="handleLogin"
          class="w-full bg-purple-700 text-white py-3 rounded-xl font-semibold hover:bg-purple-800 transition-colors mt-6"
        >
          Login
        </button>

        <p class="text-center text-gray-700 text-sm sm:text-base mt-6">
          Don’t have an account?
          <RouterLink
            to="/signup"
            class="text-purple-700 font-semibold hover:underline"
          >
            Sign Up
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
