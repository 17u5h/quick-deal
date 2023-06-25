<template>
  <div class="container">
    <UIButton @click="$router.push({name: 'Tasks'})">К списку тасков</UIButton>
  </div>
</template>

<script>
import UIButton from "@/components/UI/atoms/UIButton";

export default {
  name: "MainPage",
  components: {UIButton},
  setup() {
    const handleClick = () => {
      console.log('click')
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>