<template>
  <div>
    <Header/>
    <Visual/>
    <Work/>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header/index.vue"
import Visual from "~/components/layouts/Main/Visual.vue"
import Work from "~/components/layouts/Main/Work.vue"

export default {
  name: 'IndexPage',
  components: {
    Header,
    Visual,
    Work,
  },
}
</script> 
<style>
</style>
