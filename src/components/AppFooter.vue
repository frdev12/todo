<template>
  <div class="container col-md-10 col-lg-8 col-xl-6 d-flex justify-content-between align-items-center p-3">
    <div>
      {{ countTodoLeft }} left
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <button @click="applyFilter('all')"
              :class="{'border-success' : filterType === 'all'}"
              type="button"
              class="btn shadow-none p-1 me-1"
      >All</button>
      <button @click="applyFilter('active')"
              :class="{'border-success' : filterType === 'active'}"
              type="button"
              class="btn shadow-none p-1"
      >Active</button>
      <button @click="applyFilter('completed')"
              :class="{'border-success' : filterType === 'completed'}"
              type="button"
              class="btn shadow-none p-1 ms-1"
      >Completed</button>
    </div>
    <div>
      <button @click="deleteCompletedTodos" v-show="isOneCompleted" type="button" class="btn shadow-none p-1">Clear completed</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'AppFooter',
  methods: {
    ...mapMutations(['setFilterType', 'deleteCompletedTodos']),
    applyFilter(filterType) {
      this.setFilterType({filterType: filterType});
    }
  },
  computed: {
    ...mapGetters(['countTodoLeft', 'filterType', 'isOneCompleted'])
  }
}
</script>

<style scoped>

</style>