<template>
  <div>
    <!-- Background Image   -->
    <img
      class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-60 sm:opacity-100"
      src="/cover-photos/cover-photo.jpg"
      alt="Couple on a bed with a dog"
    />
    <!-- Gradient for the image -->
    <div
      class="block inset-0 absolute bg-gradient-to-r from-gray-800 to-transparent"
    ></div>
    <!-- Text Section -->
    <div class="relative pt-48 pb-20">
      <div class="max-w-screen-lg mx-auto mt-24">
        <h2 class="text-center text-3xl md:text-5xl font-bold mb-2 text-white">
          Indulge in enchanting flavors that weave culinary magic
        </h2>
        <h3 class="text-lg text-center md:text-3xl my-8 text-gray-100">
          Where taste buds enchant and dreams come alive
        </h3>

        <div
          class="flex justify-center items-start md:justify-center md:items-center"
        >
          <a href="#services">
            <button
              class="bg-yellow-500 text-white font-bold rounded-full text-sm py-2 px-6 mt-12 md:py-4 md:shadow-lg md:text-lg uppercase tracking-wider"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
