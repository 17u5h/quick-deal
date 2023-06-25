<template>
  <div v-if="tasks.length > 0">
    <h2 class="title">Список тасков</h2>
    <div class="list">
      <transition-group name="task-list">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" @remove="$emit('remove', task)"/>
      </transition-group>
    </div>
  </div>
  <h3 v-else>Список пуст</h3>
</template>

<script>
import TaskItem from '@/components/TaskItem'

export default {
  name: "TaskList",
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
      required: true
    },
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 40px;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.task-list-item {
  display: inline-block;
  margin-right: 10px;
}

.task-list-enter-active, .task-list-leave-active {
  transition: all 0.3s ease;
}

.task-list-enter-from, .task-list-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}
</style>