<template>
  <div class="">
    <h1 class="mb-5 text-3xl lg:text-5xl">Bem vindo ao JobSearch App</h1>
    <div class="">
      <div class="mb-20">
        <div class="mb-5">
          <b>JobSearch App</b> é uma aplicação de conecta empregadores a
          profissionais de uma forma instantânea.
        </div>
        <Search />
      </div>

      <div class="flex flex-col mt-5 gap-y-16 text-2xl">
        <div class="grid lg:grid-cols-2 gap-5 items-center">
          <div class="">
            <img
              src="/assets/img/search-1.png"
              alt=""
              class="w-full rounded-2xl"
            />
          </div>
          <div class="">
            Encontre aqui oportunidades de emprego dos seus senhos
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-5 items-center">
          <div class="lg:order-2">
            <img
              src="/assets/img/search-3.png"
              alt=""
              class="w-full rounded-2xl"
            />
          </div>
          <div class="">
            Esteja confortável com a maneira que procura e encontra o seu
            emprego dos sonhos
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  name: "Home",
  components: { Search },
  mounted() {
    // console.log(location.hostname+':'+location.port);
  },
};
</script>
