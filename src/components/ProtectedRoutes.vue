<template>
  <router-view v-if="isAuthenticated" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAuthenticated = ref(false);

onMounted(() => {
  const session = localStorage.getItem("ticketapp_session");

  if (!session) {
    // Redirect unauthorized users to signup
    router.replace({ path: "/signup" });
  } else {
    isAuthenticated.value = true;
  }
});
</script>
