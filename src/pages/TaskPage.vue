<template>
  <div class="container">
    <header class="headerButtons">
      <UIButton @click="$router.push({name: 'Main'})">На главную</UIButton>
      <UIButton @click="clearLocalStorage">Очистить localStorage</UIButton>
    </header>
    <TaskForm @create="createTask"/>
    <TaskList :tasks="tasks" @remove="removeTask" v-if="!isLoading"/>
    <div v-else><p>Идет загрузка</p></div>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"
import UIButton from "@/components/UI/atoms/UIButton";
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "TaskPage",
  components: {UIButton, TaskForm, TaskList},
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      removeTask: 'task/removeTask',
      createTask: 'task/createTask',
    }),
    ...mapActions({
      fetchTasks: 'task/fetchTasks',
    }),
    clearLocalStorage() {                                     //этой функции и кнопки над ней не будет, когда будет бэкенд
      const data = localStorage.getItem('yadrenkin')     //
      if (data) localStorage.removeItem('yadrenkin')     //
      this.fetchTasks()                                      //
    },                                                       //
  },
  mounted() {
    this.fetchTasks()
  },
  computed: {
    ...mapState({
      tasks: state => state.task.tasks,
      isLoading: state => state.task.isLoading
    }),
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  gap: 40px;
}

.headerButtons {
  display: flex;
  gap: 8px;
}

@media (max-width: 800px) {
  .headerButtons {
    flex-direction: column;
  }
}

</style>