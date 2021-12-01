<template>
  <div class="c-counters">
    <div class="counters__item">
      <div class="star"><icon name="star" /></div>
      <div class="counters__star">Star</div>
    </div>
    <div class="counters__item counters__stars">{{stars}}</div>
    <div class="counters__item">
      <div class="star"><icon name="fork" /></div>
      <div class="counters__fork">fork</div>
    </div>
    <div class="counters__item counters__forks">{{forks}}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  props: ['stars', 'forks'],
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./counters.scss" scoped>
</style>
