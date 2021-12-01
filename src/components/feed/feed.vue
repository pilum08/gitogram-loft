<template>
  <div class="c-feed">
    <div class="feed-toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown">
      <ul class="comment-list" v-if="!loading">
        <li class="comments-item" v-for="(com, ind) in comments" :key="ind">
          <comment :text="com.title" :username="com.user.login" />
        </li>
      </ul>
      <div class="placeholder-issue" v-else>
        <div class="placeholder-issue__p1"></div>
        <div class="placeholder-issue__p2"></div>
        <div class="placeholder-issue__p3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '../comment/comment.vue'
import Toggler from '../toggler/toggler.vue'
export default {
  name: 'feed-item',
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['tooggleIssues'],
  components: {
    Comment,
    Toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      if (this.comments.length === 0) {
        this.$emit('tooggleIssues', isOpened)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
