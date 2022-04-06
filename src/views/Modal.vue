<template>
  <div v-show="showback" class="backdrop">
    <div v-show="show" class="modal">
      <div>
        <img @click="off" src="@/assets/icon/close.png/" alt="" class="" />
      </div>
      <div class="flex flex-col gap-2 mt-5">
        <p class="bg-gray-300">
          {{ selctedarticle.body }}
        </p>
        <span class="bg-gray-300">
          {{ selctedarticle.id }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  props: {
    showback: {
      type: Boolean,
    },
    show: {
      type: Boolean,
    },
    selctedarticle: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    off() {
      this.$emit("offpop");
    },
  },
};
</script>
<style scoped>
.modal {
  @apply bg-white text-black top-1/2  left-1/4  py-3 px-3 w-80   h-60  text-center   rounded-lg fixed z-50;
}
.backdrop {
  @apply w-full h-full fixed  top-0 left-0 right-0 bottom-0 bg-gray-800  backdrop-filter isolate opacity-90  z-30;
}
.modal {
  top: 350px;
  left: 700px;
}
</style>
