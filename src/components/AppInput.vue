<template>
  <div class="container col-md-10 col-lg-8 col-xl-6">
    <input @keypress.enter="addNewTodo"
           v-model.trim="todo"
           class="w-100 border-0 p-2 fst-italic border-bottom mb-3 mt-3"
           type="text"
           placeholder="Что нужно сделать?"
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppInput',
  data () {
    return {
      todo: '',
    }
  },
  methods: {
    ...mapActions(['setTodo']),
    addNewTodo () {
      if (this.todo) {
        this.setTodo({ todo: this.todo })
      }
      this.todo = ''
    }
  }
}
</script>
