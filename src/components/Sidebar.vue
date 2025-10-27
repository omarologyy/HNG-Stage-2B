<template>
  <div
    :class="[
      'fixed md:static inset-y-0 left-0 bg-purple-700 text-white flex flex-col transition-all duration-300 z-40',
      isOpen ? 'w-56 sm:w-60' : 'w-0 md:w-20',
    ]"
  >
    <!-- Logo & Toggle -->
    <div
      class="flex items-center justify-between p-4 border-b border-purple-500"
    >
      <div class="flex items-center gap-3 overflow-hidden">
        <h1
          v-if="isOpen"
          class="text-lg font-bold transition-all duration-300 whitespace-nowrap"
        >
          Tickr
        </h1>
      </div>

      <button
        @click="toggleSidebar"
        class="flex items-center justify-center text-2xl p-2 rounded-md hover:bg-purple-600 transition md:hidden"
      >
        ☰
      </button>
    </div>

    <!-- Nav Links -->
    <nav
      v-if="isOpen"
      class="flex flex-col mt-4 space-y-2 overflow-y-auto px-2 pb-6"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
        :class="{
          'bg-purple-900': $route.path === item.path,
          'hover:bg-purple-800': $route.path !== item.path,
        }"
      >
        <img
          :src="item.icon"
          alt=""
          class="w-5 h-5 object-contain filter invert brightness-200"
        />
        <span v-if="isOpen" class="text-sm">{{ item.name }}</span>
      </RouterLink>
    </nav>
  </div>

  <!-- Overlay for mobile when sidebar is open -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
    @click="toggleSidebar"
  ></div>
</template>

<script setup>
import { useSidebar } from "../composable/useSidebar";
import dashboard from "../icons/dashboard.svg";
import mail from "../icons/mail.svg";
import mailing from "../icons/mail-open.svg";
import checked from "../icons/checked.svg";

const { isOpen, toggleSidebar } = useSidebar();

const navItems = [
  { name: "Dashboard", icon: dashboard, path: "/dashboard" },
  { name: "Total", icon: mail, path: "/dashboard/total-tickets" },
  { name: "Open", icon: mailing, path: "/dashboard/open-tickets" },
  { name: "Resolved", icon: checked, path: "/dashboard/resolved-tickets" },
];
</script>
