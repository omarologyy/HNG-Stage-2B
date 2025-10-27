<template>
  <div class="p-4 sm:p-6 bg-gray-100 min-h-screen">
    <h1
      class="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-green-700"
    >
      Resolved Tickets
    </h1>
    <TicketList :tickets="tickets" @edit="() => {}" @delete="() => {}" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TicketList from "./TicketList.vue";
import { getTickets } from "../utils/storage";

const tickets = ref([]);

onMounted(() => {
  const allTickets = getTickets();
  tickets.value = allTickets.filter((t) => t.status === "Resolved");
});
</script>
