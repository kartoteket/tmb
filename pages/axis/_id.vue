<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="absolute pin-t pin-l p-2 text-xs text-grey-darkest">
      #{{ axis.current.id }}
    </div>

    <!-- "Close" -->
    <nuxt-link
      to="/axis"
      class="absolute pin-t pin-r p-4 text-3xl text-grey-darkest font-hairline no-underline"
    >
      X
    </nuxt-link>

    <!-- Prev Axis -->
    <nuxt-link
      v-if="axis.prev"
      :to="`/axis/${axis.prev.id}`"
      class="prevnext pin-l"
    >
      prev
    </nuxt-link>

    <!-- Tot image -->
    <div class="flex items-center justify-center min-h-full">
      <img
        v-if="axis.current.hasTot > 0"
        :src="imgSrc(axis.current.id)"
        class="max-h-full"
      />
    </div>

    <!-- Next Axis -->
    <nuxt-link
      v-if="axis.next"
      :to="`/axis/${axis.next.id}`"
      class="prevnext pin-r justify-end"
    >
      Next
    </nuxt-link>

    <!-- Correspondence -->
    <div class="border-t border-grey relative p-4 pb-8 overflow-scroll">
      <p class="leading-normal text-sm text-grey-darkest">
        <span class="whitespace-pre-wrap">{{ axis.current.text }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      axis: 'currentCorrespondences'
    })
  },
  async fetch({ store, params, payload }) {
    if (payload) {
      // console.log(payload)
      store.commit('setCurrentCorrespondences', payload)
    } else {
      await store.dispatch('fetchCorrespondenceById', params.id)
    }
  },
  methods: {
    imgSrc(id) {
      if (id) {
        return `http://tots.imgix.net/Axis%20${id}.jpg?w=512`
      }
      return false
    }
  }
}
</script>

<style>
.prevnext {
  transition: opacity 0.5s;
  @apply absolute pin-y inline-flex w-1/4 mt-12 p-4 text-xs text-grey-darkest no-underline items-center opacity-0;
}
.prevnext:hover {
  @apply opacity-100;
}
</style>
