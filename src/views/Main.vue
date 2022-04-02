<template>
  <app-to-do-input/>
  <app-list/>
  <app-footer/>
</template>

<script>
import AppToDoInput from '@/components/AppToDoInput'
import AppList from '@/components/AppList'
import AppFooter from '@/components/AppFooter'
import {mapMutations} from 'vuex';

export default {
  name: 'Main',
  components: {
    AppToDoInput,
    AppList,
    AppFooter
  },
  mounted () {
    this.getFromStorage();
  },
  methods: {
    ...mapMutations(['getFromStorage'])
  }
}
</script>

<style scoped>

</style>