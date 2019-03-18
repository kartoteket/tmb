<template>
  <section>
    <tots :tots="tots" />
  </section>
</template>

<script>
import Tots from '~/components/Tots.vue'
import Papa from 'papaparse'
// const SHEET_ID = '1WWKpGoYt4qyFpWnWq02D_N82NTVOgFeUJ1dzRekKwqg'
// const URL = `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/1/public/values?alt=json`
const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

export default {
  components: {
    Tots
  },
  async asyncData({ $axios }) {
    const csv = await $axios.$get(URL)
    const correspondences = Papa.parse(csv, {
      header: true,
      dynamicTyping: true
    })
    // console.log(correspondences.meta)
    console.log(correspondences.data)
    return { tots: correspondences.data }
  }
}
</script>

<style>
/*
Dumbledore just waved his wand in Horace's apartment and "the furniture flew back to its original places; ornaments reformed in midair, feathers zoomed into their cushions; torn books repaired themselves as they landed upon their shelves...".
https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
*/

.tots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(16, 1fr [row-start]);
  /* grid-row-gap: 2rem; */
}
</style>
