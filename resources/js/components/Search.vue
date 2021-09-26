<template>
  <div class="">
    <form action="" @submit="handleSubmit" id="form">
      <div class="flex gap-2 border rounded bg-white px-4 py-2">
        <input
          type="search"
          name="search"
          placeholder="Procure vagas..."
          class="flex-1 focus:outline-none"
          v-model="formData.search"
          @keyup="handleKeyUp"
          autofocus
        />
        <button>
          <i class="bi-search"></i>
        </button>
      </div>
      <div class="text-gray-900"></div>
    </form>
  </div>
</template>

<script>
import Message from "./Message.vue";
export default {
  components: { Message },
  name: "Search",
  data() {
    return {
      formData: {
        search: "",
      },
      feedback: {
        submited: false,
        error: false,
        success: false,
        loading: false,
        mesage: "",
        type: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let form = e.target,
        input = form.querySelector("input");
      let data = this.formData.search;
      if (!data || !data.trim()) {
        this.formData.search = null;
        form.firstChild.classList.add("border-red-400");
        input.classList.add("placeholder-red-400");
        input.setAttribute(
          "placeholder",
          "Digite a vaga que pretende pesquisar..."
        );
      } else {
        this.$router.push("/search?term=" + data);
      }
    },
    handleKeyUp(e) {
      let el = e.target,
        form = el.closest("form");
      if (this.formData.search) {
        form.firstChild.classList.remove("border-red-400");
        el.setAttribute("placeholder", "Pesquise vagas...");
        el.classList.remove("placeholder-red-400");
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    document.getElementById("form").querySelector("input").focus();
    // }, 1000);
  },
};
</script>
