<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Sidebar (collapsible on small screens) -->
    <Sidebar />

    <!-- Main content area -->
    <main class="flex-1 bg-gray-50 p-4 sm:p-6 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* Optional but useful for smooth transitions */
main {
  transition: margin-left 0.3s ease-in-out;
}
</style>
