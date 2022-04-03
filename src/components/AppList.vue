<template>
  <div class="container col-md-10 col-lg-8 col-xl-6">
    <ul class="list-group">
      <li v-for="(item, key) in filteredTodos" :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="d-flex justify-content-between align-items-center overflow-hidden">
          <input v-model="filteredTodos[key].completed" class="custom-checkbox" type="checkbox" :id="key">
          <label :class="{'text-muted' : item.completed}"
                 :for="key"
          >
            {{ item.todo }}
          </label>
        </div>
        <svg @click="deleteTodoItem(key)" class="delete-button bi bi-x-circle col-1" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0
              1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppList',
  methods: {
    ...mapMutations(['deleteTodo', 'saveToStorage']),
    deleteTodoItem (key) {
      this.deleteTodo({ key: key })
    }
  },
  computed: {
    ...mapGetters(['filteredTodos'])
  },
  watch: {
    filteredTodos: {
      handler () {
        this.saveToStorage()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 20px;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox:checked + label::before {
  border-color: darkgreen;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='darkgreen' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.delete-button:hover {
  fill: orangered;
}

.delete-button:active {
  fill: red;
}
</style>