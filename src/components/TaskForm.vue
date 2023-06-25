<template>
  <form class="form" @submit.prevent>
    <UIInput v-model.trim="task.title"
             placeholder="Описание таска"/>
    <UIButton class="btn" @click="createTask">Создать</UIButton>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      task: {
        title: '',
        completed: false
      }
    }
  },
  methods: {
    createTask() {
      if (this.task.title === '') return
      this.task.id = Date.now()
      this.$emit('create', this.task)
      this.task = {
        title: '',
        completed: false
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  width: 600px;
}

@media (max-width: 800px) {
  .form {
    flex-direction: column;
    width: 200px;
  }
}
</style>