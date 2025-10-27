<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close"]);
const router = useRouter();

const handleConfirm = () => {
  localStorage.removeItem("ticketapp_session");
  emit("close");
  router.push("/");
};
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
  >
    <div
      class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm text-center animate-fadeIn"
    >
      <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Are you sure you want to log out?
      </h2>
      <div
        class="flex flex-col sm:flex-row justify-around gap-3 sm:gap-0 mt-4 sm:mt-6"
      >
        <button
          @click="handleConfirm"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Yes
        </button>
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}
</style>
