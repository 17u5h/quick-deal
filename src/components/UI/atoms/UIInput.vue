<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>

export default {
  name: "UIInput",
  props: {
    modelValue: [String, Number],
    width: String,
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  height: 30px;
  border: 1px solid #150e26;
  border-radius: 4px;
  padding: 0 6px;
}

@media (max-width: 800px) {
  .input {
    width: 200px;
  }
}
</style>