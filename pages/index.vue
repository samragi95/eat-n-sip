<template>
  <div>
    <home-hero />
    <home-about />
    <home-service />
    <contact-form />
  </div>
</template>
<script setup>
const title = ref("Eat N Sip");
const description = ref("Home to a mouthwatering delight");

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<style>
html {
  scroll-padding-top: 150px;
  scroll-behavior: smooth;
}
/* https://ralphdeving.github.io/blog/post/vue-router-scroll-behavior/ */
</style>
