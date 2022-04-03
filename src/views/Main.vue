<template>
  <app-input/>
  <app-list/>
  <app-menu/>
</template>

<script>
import AppInput from '@/components/AppInput'
import AppList from '@/components/AppList'
import AppMenu from '@/components/AppMenu'
import { mapMutations } from 'vuex'

export default {
  name: 'Main',
  components: {
    AppInput,
    AppList,
    AppMenu,
  },
  mounted () {
    this.getFromStorage()
  },
  methods: {
    ...mapMutations(['getFromStorage'])
  }
}
</script>
