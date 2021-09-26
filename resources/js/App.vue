<template>
  <div class="app">
    <div class="container bg-gray-50 p-5 mx-auto w-11/12 max-w-6xl border">
      <header>
        <NavBar></NavBar>
      </header>
      <router-view></router-view>
      <footer
        class="
          bg-gradient-to-tr
          from-gray-800
          via-gray-600
          to-gray-800
          mt-10
          -mx-5
          -mb-5
          text-gray-100
        "
      >
        <div class="flex flex-col md:flex-row gap-4 items-center p-5">
          <div class="">&copy; 2021 - Todos os direitos reservados</div>
          <div class="ml-0 md:ml-auto">
            <ul class="flex gap-3 text-gray-800">
              <li>
                <a href="" class="flex items-center justify-center bg-gray-50 w-8 h-8 rounded-full">
                    <i class="bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" class="flex items-center justify-center bg-gray-50 w-8 h-8 rounded-full">
                    <i class="bi-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="" class="flex items-center justify-center bg-gray-50 w-8 h-8 rounded-full">
                    <i class="bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "app",
};
</script>
