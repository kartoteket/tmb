<template>
  <div
    v-show="exists(tot)"
    class="flex flex-col align-center justify-center faux-border"
  >
    <div class="border-b border-grey h-64 text-center p-4 crosshairs">
      <nuxt-link :to="`/axis/${tot.id}`">
        <img v-if="tot.hasTot > 0" :src="imgSrc(tot.id)" class="max-h-full" />
      </nuxt-link>
    </div>

    <div class="relative p-2 pt-10 pb-4 h-64 overflow-scroll">
      <div class="absolute pin pin-l p-2 text-xs text-grey-darkest">
        #{{ tot.id }}
      </div>

      <p class="leading-normal text-sm text-grey-darkest">
        <span class="whitespace-pre-wrap">{{ tot.text }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tot',
  props: {
    tot: {
      type: Object,
      default: null
    }
  },
  methods: {
    exists(tot) {
      return tot.text || tot.hasTot
    },
    imgSrc(id) {
      if (id) {
        return `http://tots.imgix.net/Axis%20${id}.jpg?w=256`
      }
      return false
    }
  }
}
</script>
