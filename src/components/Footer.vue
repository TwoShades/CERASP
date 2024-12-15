<template>
  <footer class="bg-blue-900 text-white">
    <div class="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
      <!-- Branding -->
      <div>
        <h2 class="text-2xl font-bold">CERASP</h2>
        <p class="text-sm mt-2">Innovating Solutions for Tomorrow</p>
      </div>

      <!-- Links -->
      <div class="flex mt-4 md:mt-0">
        <ul class="mr-8 space-y-2">
          <li><a href="/about-us" class="hover:text-blue-300">About Us</a></li>
          <li><a href="/expertise" class="hover:text-blue-300">Expertise</a></li>
          <li><a href="/news" class="hover:text-blue-300">News</a></li>
        </ul>
        <ul class="space-y-2">
          <li><a href="/equipment" class="hover:text-blue-300">Equipment</a></li>
          <li><a href="/contact" class="hover:text-blue-300">Contact</a></li>
          <li><a href="/terms" class="hover:text-blue-300">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Social Icons -->
      <div class="flex mt-4 md:mt-0 space-x-4">
        <a href="#" class="hover:text-blue-300">
          <i class="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#" class="hover:text-blue-300">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" class="hover:text-blue-300">
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center py-4 bg-blue-800 text-sm">
      &copy; {{ new Date().getFullYear() }} CERASP. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style scoped>
i {
  transition: color 0.3s ease;
}
</style>
