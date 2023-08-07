<template>
  <section id="contact">
    <div
      class="my-28 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0"
    >
      <h1 class="font-bold text-xl text-center text-yellow-500 font-pop">
        Contact Us
      </h1>
      <h2 class="font-pop text-3xl text-center py-4">Get In touch</h2>
      <form
        name="contactus"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactus" />
        <div class="py-8">
          <div
            class="flex flex-col md:flex md:justify-center md:flex-row md:items-center md:space-x-4"
          >
            <input
              class="block border border-grey-light md:w-[297px] lg:w-[390px] p-3 rounded mb-4"
              name="name"
              id="name"
              type="name"
              placeholder="Your Name"
              required
            />

            <input
              class="block border border-grey-light md:w-[297px] lg:w-[390px] p-3 rounded mb-4"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="py-3 space-y-3 flex justify-center items-center flex-col">
            <textarea
              class="block border border-grey-light w-full md:w-[605px] lg:w-[800px] h-32 p-3 rounded mb-4"
              name="message"
              id="message"
              type="message"
              placeholder="Your Message..."
              required
            />
            <button
              class="w-64 p-3 mt-3 text-center md:py-3 rounded-full bg-yellow-500 text-white transform transition duration-500 hover:scale-125 hover:bg-yellow-600 focus:outline-none md:my-1 uppercase"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
