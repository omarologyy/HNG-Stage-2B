<script setup></script>

<template>
  <!-- Hero Section Start -->
  <div
    class="lg:flex grow bg-cover bg-center overflow-hidden justify-between items-center px-8"
    style="background-image: url('/images/wave.svg')"
  >
    <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-4 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h1
          className="text-4xl font-bold text-center sm:text-3xl lg:text-left font-theme-heading"
        >
          <span>Every Ticket, Every Customer</span>
          <br />
          <span className="text-purple-900"> Handled with Care</span>
        </h1>
        <!-- <p
          class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"
        >
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p> -->
        <p className="text-md text-blue mt-6 ">
          <span>Stay on top of customer requests with an organized,</span>
          <br />
          <span>automated system that ensures no ticket slips</span>
          <br />
          <span>through the cracks.</span>
        </p>
        <!-- <div class="flex justify-center lg:justify-start mt-10">
          <LinkButton btn-type="primary" link="#download-section"
            >Get It On Chrome</LinkButton
          >
          <LinkButton btn-type="muted" link="#download-section"
            >Get It On Firefox</LinkButton
          >
        </div> -->
        <div className="flex flex-row space-x-3 items-center mt-8">
          <button
            className="bg-purple-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-400 flex items-center justify-center"
          >
            Get Started Today
          </button>

          <button
            className="border-2 border-purple-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-100 flex items-center justify-center"
          >
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div
        class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10"
      >
        <img class="z-10 w-full" src="/images/illustration-hero.svg" />
      </div>
    </section>
  </div>
  <!-- Hero Section End -->
</template>
