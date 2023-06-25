<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UIButton"
}
</script>

<style scoped>
.btn {
  padding: 6px 30px;
  background-color: #150e26;
  color: #fff;
  border-radius: 4px;
  border: none;
  user-select: none;
}
</style>