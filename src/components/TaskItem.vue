<template>
  <div class="container">
    <p v-if="!isEditing">{{ task.title }}</p>
    <UIInput v-else :value="task.title" @input="edit" @keyup.enter="toggleEdit"/>
    <div class="buttonBlock">
      <UIButton @click="toggleEdit">Редактировать</UIButton>
      <UIButton @click="$emit('remove', task)">Удалить</UIButton>
    </div>
  </div>
</template>

<script>
import UIButton from "@/components/UI/atoms/UIButton";
import UIInput from "@/components/UI/atoms/UIInput";
import {mapState, mapMutations} from 'vuex'

export default {
  name: "TaskItem",
  components: {UIInput, UIButton},
  props: {
    task: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      newTitle: '',
      isEditing: false,
    }
  },
  methods: {
    ...mapMutations({
      editTask: "task/editTask",
      fetchChanges: "task/fetchChanges",
    }),

    edit(e) {
      this.newTitle = e.target.value
      this.editTask([this.newTitle, this.task])
    },

    toggleEdit() {
      this.isEditing = !this.isEditing
      if (!this.isEditing) this.fetchChanges()
    },
  },
  computed: {
    ...mapState({
      tasks: state => state.task.tasks,
    }),
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 80vw;
  padding: 4px;
  border: 1px solid #ddd;
}
.buttonBlock{
  display: flex;
  gap: 8px;
}
@media (max-width: 800px) {
  .container {
    flex-direction: column;
    gap: 4px;
  }
}

</style>