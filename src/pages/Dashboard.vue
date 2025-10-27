<script setup>
import { ref, watch, onMounted } from "vue";
import CreateTicketForm from "../components/CreateTicketForm.vue";
import TicketList from "../components/TicketList.vue";
import Logout from "./Logout.vue";
import { getTickets, saveTickets } from "../utils/storage";

const tickets = ref([]);
const ticketToEdit = ref(null);
const isLogoutOpen = ref(false);

onMounted(() => {
  tickets.value = getTickets();
});

watch(
  tickets,
  (newTickets) => {
    saveTickets(newTickets);
  },
  { deep: true }
);

const addOrUpdateTicket = (ticket) => {
  if (ticketToEdit.value) {
    tickets.value = tickets.value.map((t) =>
      t.title === ticketToEdit.value.title ? ticket : t
    );
    ticketToEdit.value = null;
    alert.success("Ticket updated!");
  } else {
    tickets.value.push(ticket);
    alert.success("Ticket created!");
  }
};

const handleEdit = (index) => {
  ticketToEdit.value = tickets.value[index];
};

const handleDelete = (index) => {
  if (confirm("Are you sure?")) {
    tickets.value.splice(index, 1);
    alert.info("Ticket deleted");
  }
};
</script>

<template>
  <div class="relative p-4 sm:p-6 text-center min-h-screen bg-gray-50">
    <!-- Logout button -->
    <button
      @click="isLogoutOpen = true"
      class="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-2 bg-purple-600 text-white text-sm sm:text-base rounded-lg hover:bg-purple-700 transition"
    >
      Logout
    </button>

    <h2 class="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
      Welcome to Tick<span class="text-purple-600">r</span>
    </h2>

    <p class="text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto px-2">
      The streamlined ticket system designed for speed. Automate routine work,
      centralize communication, and gain insights to boost team performance.
    </p>

    <div
      class="flex flex-col md:flex-row items-start justify-center gap-6 mt-8"
    >
      <div class="w-full md:w-1/3">
        <CreateTicketForm
          :addOrUpdateTicket="addOrUpdateTicket"
          :ticketToEdit="ticketToEdit"
        />
      </div>

      <div class="w-full md:w-2/3">
        <TicketList
          :tickets="tickets"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>
    </div>

    <Logout :isOpen="isLogoutOpen" @close="isLogoutOpen = false" />
  </div>
</template>
