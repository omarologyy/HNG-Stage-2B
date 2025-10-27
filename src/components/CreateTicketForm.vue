<template>
  <form
    @submit="handleSubmit"
    class="bg-white shadow-md rounded-xl p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 space-y-4"
  >
    <input
      v-model="formData.title"
      name="title"
      placeholder="Ticket title"
      class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none text-sm sm:text-base"
    />
    <textarea
      v-model="formData.description"
      name="description"
      placeholder="Description"
      class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none text-sm sm:text-base"
    />
    <select
      v-model="formData.status"
      name="status"
      class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none text-sm sm:text-base"
    >
      <option value="Open">Open</option>
      <option value="Resolved">Resolved</option>
    </select>

    <button
      type="submit"
      class="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition text-sm sm:text-base"
    >
      {{ props.ticketToEdit ? "Update Ticket" : "Create Ticket" }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  addOrUpdateTicket: Function,
  ticketToEdit: Object,
});

const formData = ref({
  title: "",
  description: "",
  status: "Open",
});

watch(
  () => props.ticketToEdit,
  (newVal) => {
    if (newVal) formData.value = { ...newVal };
  }
);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.value.title.trim() || !formData.value.description.trim()) {
    alert("All fields are required!");
    return;
  }
  props.addOrUpdateTicket(formData.value);
  formData.value = { title: "", description: "", status: "Open" };
};
</script>
