<template>
  <div class="flex items-center gap-2 bg-white px-4 py-5 my-5 text-center border border-gray-100 text-lg">
    <span class="animate-spin inline-block">
      <i class="bi-arrow-repeat"></i>
    </span>
    <span>{{ text && text.trim() != '' ? text : "Carregando dados..." }}</span>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {
    text: "",
  },
};
</script>
