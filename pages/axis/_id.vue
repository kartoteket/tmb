<template>
  <div>
    {{ axis.text }}
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      axis: {}
    }
  },
  asyncData({ params }) {
    return { id: params.id }
  },
  mounted() {
    const getCorrespondence = this.$store.getters.getCorrespondence
    this.axis = getCorrespondence(this.id)
  }
}
</script>

<style></style>
