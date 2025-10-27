<script setup>
import downloads from "../data/downloads";
</script>

<template>
  <!-- Download Section Start -->
  <div class="bg-gray-200">
    <div id="download-section" class="container mx-auto px-5 md:w-4/5">
      <section class="py-16 pt-18">
        <!-- Heading -->
        <div class="w-4/5 md:w-3/5 mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-theme-heading font-medium">
            Features
          </h2>
        </div>

        <!-- Cards Grid -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:items-stretch items-start"
        >
          <div
            v-for="download in downloads"
            :key="download.id"
            class="shadow-lg rounded-lg flex flex-col items-center text-center bg-white py-10 h-full"
          >
            <h3 class="text-2xl font-theme-heading font-medium mt-4">
              {{ download.title }}
            </h3>
            <p
              class="text-sm font-theme-content text-theme-grayish-blue mt-3 mb-6"
            >
              {{ download.subTitle }}
            </p>
            <!-- <LinkButton btn-type="primary" :link="download.link" class="text-sm"> 
                 Add & Install Extension 
               </LinkButton> -->
            <p class="text-xs">Learn More</p>
          </div>
        </div>
      </section>
    </div>
    <!-- Download Section End -->
  </div>
</template>
