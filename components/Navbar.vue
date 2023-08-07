<template>
  <div
    class="w-full sticky top-0 z-30 shadow-lg hover:shadow-lg scroll-smooth border-t-4 border-yellow-500"
  >
    <div>
      <nav
        class="navbar px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-0 lg:flex lg:justify-between lg:items-center bg-black bg-black-70"
      >
        <div class="flex space-x-8 items-center justify-between">
          <!-- LOGO Section  -->
          <NuxtLink to="/">
            <div
              class="flex items-center text-xl space-x-2 md:space-x-0 font-bold md:text-2xl"
            >
              <img
                class="h-21 w-21 pr-8 md:py-4 lg:pl-2"
                src="@/assets/image/logo.png"
                alt
              />
              <p
                class="font-semibold italic text-white px-6 text-xs md:text-lg"
              >
                Eat 'N' Sip
                <br />
                <span class="text-yellow-600">Where Flavor Meets Harmony</span>
              </p>
            </div>
          </NuxtLink>

          <div @click="toggleNav" class="flex lg:hidden">
            <button
              type="button"
              class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-yellow-500">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Navigation Links -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex flex-col mt-8 space-y-6 lg:space-y-0 lg:space-x-6 items-center justify-center lg:flex lg:flex-row lg:items-center md:mt-0 text-white"
        >
          <li
            class="hover:bg-opacity-100 hover:bg-yellow-500 hover:rounded-full px-2"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li
            class="hover:bg-opacity-100 hover:bg-yellow-500 hover:rounded-full px-2"
          >
            <a href="/#menu">Menu</a>
          </li>
          <li
            class="hover:bg-opacity-100 hover:bg-yellow-500 hover:rounded-full px-2"
          >
            <a href="/#services">Services</a>
          </li>
          <li
            class="hover:bg-opacity-100 hover:bg-yellow-500 hover:rounded-full px-2"
          >
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
