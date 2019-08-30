<template>
  <nav>
    <ul class="list-reset flex justify-center text-xl font-hairline p-8">
      <li
        v-if="linkHome"
        class="border-r mr-4 pr-4"
        :class="`border-${textColor}`"
      >
        <nuxt-link to="/" class="no-underline">
          Home
        </nuxt-link>
      </li>

      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" class="no-underline" :class="`text-${textColor}`">
          Atoms
        </nuxt-link>
      </li>
      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" class="no-underline" :class="`text-${textColor}`">
          Elements
        </nuxt-link>
      </li>
      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" class="no-underline" :class="`text-${textColor}`">
          Particles
        </nuxt-link>
      </li>
      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" class="no-underline" :class="`text-${textColor}`">
          Molecules
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/axis" class="no-underline" :class="`text-${textColor}`">
          Compounds
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: 'white'
    },
    linkHome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
