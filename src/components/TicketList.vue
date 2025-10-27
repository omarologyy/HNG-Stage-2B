<template>
  <div>
    <p v-if="!props.tickets.length" class="text-gray-500 text-center">
      No tickets available.
    </p>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      <div
        v-for="(ticket, index) in props.tickets"
        :key="index"
        class="bg-white shadow-md rounded-xl p-4 sm:p-5 flex flex-col justify-between"
      >
        <div>
          <h2 class="text-lg sm:text-xl font-semibold text-purple-700">
            {{ ticket.title }}
          </h2>
          <p class="text-sm sm:text-base text-gray-600 mt-2">
            {{ ticket.description }}
          </p>
          <span
            :class="[
              'inline-block mt-3 px-2 py-1 text-xs sm:text-sm font-semibold rounded-md',
              ticket.status === 'Open'
                ? 'bg-yellow-200 text-yellow-800'
                : 'bg-green-200 text-green-800',
            ]"
          >
            {{ ticket.status }}
          </span>
        </div>

        <div class="flex justify-end space-x-2 mt-4">
          <button
            @click="$emit('edit', index)"
            class="text-blue-500 text-sm sm:text-base hover:underline"
          >
            Edit
          </button>
          <button
            @click="$emit('delete', index)"
            class="text-red-500 text-sm sm:text-base hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tickets: Array,
});
const emit = defineEmits(["edit", "delete"]);
</script>
