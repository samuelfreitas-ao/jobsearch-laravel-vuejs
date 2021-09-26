<template>
  <div class="">
    <div class="bg-red-400 text-white" v-if="type == 'error'">
      {{ text }}
    </div>
    <div class="bg-green-400 text-white" v-if="type == 'success'">
      {{ text }}
    </div>
    <div class="bg-blue-400 text-white" v-if="type == 'loading'">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    type: "",
    Text: "",
  },
};
</script>
