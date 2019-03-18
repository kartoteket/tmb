<template>
  <div class="tots">
    <tot v-for="axis in correspondences" :key="axis.id" :tot="axis"></tot>
  </div>
</template>
<script>
import Tot from '~/components/Tot.vue'

export default {
  components: {
    Tot
  },
  computed: {
    // Get all correspondences from store
    correspondences() {
      return this.$store.state.correspondences
    }
  },
  mounted() {
    // console.log(this.correspondences)
  }
}
</script>

<style></style>
