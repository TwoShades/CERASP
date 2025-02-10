<template>
  <header class="bg-blue-800 text-white">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <a href="/" class="hover:text-blue-300">CERASP</a>
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-blue-300">Home</a></li>
          <li><a href="/equipment" class="hover:text-blue-300">Equipment</a></li>
          <li><a href="/expertise" class="hover:text-blue-300">Expertise</a></li>
          <li><a href="/team" class="hover:text-blue-300">Our Team</a></li>
          <li><a href="/sectors" class="hover:text-blue-300">Sectors</a></li>
          <li><a href="/news" class="hover:text-blue-300">News</a></li>
          <li><a href="/about" class="hover:text-blue-300">About Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style scoped>
/* Add any scoped styles specific to this header if needed */
</style>
