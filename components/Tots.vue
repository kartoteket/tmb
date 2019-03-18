<template>
  <div class="tots">
    <tot v-for="axis in correspondences" :key="axis.id" :tot="axis"></tot>
  </div>
</template>
<script>
import Tot from '~/components/Tot.vue'

// const dummyTots = Array.from({ length: 256 }, (v, i) => i)

export default {
  components: {
    Tot
  },
  // props: {
  //   tots: {
  //     type: Array,
  //     required: true
  //   }
  // },
  // data() {
  //   return {
  //     dummyTots: dummyTots
  //   }
  // },
  computed: {
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
