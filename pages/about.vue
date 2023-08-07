<template>
  <section id="about">
    <div class="py-12 bg-slate-100 h-64">
      <h1
        class="font-pop text-xl font-bold text-center text-yellow-500 uppercase"
      >
        ABOUT US
      </h1>
      <h2
        class="text-3xl flex items-center justify-center mb-4 font-pop uppercase"
      >
        Discover Our Story
      </h2>
    </div>
    <div class="flex justify-center items-center relative bottom-24">
      <img
        class="object-cover px-16 md:px-0"
        src="/cover-photos/cover-photo.jpg"
        alt="Eat n Sip Restaurant"
      />
    </div>

    <section id="about" class="flex flex-col md:flex-row">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0"
      >
        <div class="prose prose-indigo prose-lg">
          <p class="mb-10">
            Welcome to
            <strong class="font-pop md:text-2xl">Eat n Sip Restaurant</strong>,
            where gastronomy meets elegance. We pride ourselves on creating a
            refined dining experience that tantalizes the senses and captures
            the heart.
          </p>
          <p class="mb-10">
            Our culinary journey is a fusion of tradition and innovation. Each
            dish on our meticulously curated menu showcases the finest
            ingredients and craftsmanship, promising a symphony of flavors that
            dance on your palate.
          </p>
          <p class="mb-10">
            At Eat n Sip, we believe that every meal is a celebration. Our team
            of passionate chefs crafts each plate with artistry, presenting a
            visual and gastronomic masterpiece that reflects our dedication to
            excellence.
          </p>
          <p class="mb-10">
            Nestled in the heart of the city, our restaurant is more than a
            dining destination; it's a canvas where moments are painted with
            culinary finesse. Whether it's an intimate soirée, a joyous
            gathering, or a quiet rendezvous, our ambiance provides the perfect
            backdrop for cherished memories.
          </p>
          <p class="mb-10">
            Join us at Eat n Sip Restaurant and embark on a culinary odyssey
            that celebrates passion, flavor, and sophistication. We look forward
            to serving you and creating a dining experience that is simply
            unforgettable.
          </p>
        </div>
      </div>
      <div class="relative md:w-1/2">
        <div class="md:absolute right-0 top-0 bg-white p-8 md:p-12 shadow-lg">
          <h3 class="font-pop text-xl font-bold mb-4 text-orange-500 uppercase">
            Visit Us
          </h3>
          <div class="flex flex-col space-y-4">
            <div class="flex items-center">
              <span class="text-gray-600">Opening Hours:</span>
              <span class="ml-2 font-semibold"
                >Mon - Fri: 11:00 AM - 10:00 PM</span
              >
            </div>
            <div class="flex items-center">
              <span class="text-gray-600">Sat - Sun: 10:00 AM - 11:00 PM</span>
            </div>
            <div class="flex items-center">
              <span class="text-gray-600">Reservation:</span>
              <span class="ml-2 font-semibold"
                ><a href="tel:123-456-7890" class="text-blue-500"
                  >123-456-7890</a
                ></span
              >
            </div>
            <div class="flex items-center">
              <span class="text-gray-600">Email:</span>
              <span class="ml-2 font-semibold"
                ><a
                  href="mailto:nabingiri.eatnsip@gmail.com"
                  class="text-blue-500"
                  >info@eatnsip.com</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
