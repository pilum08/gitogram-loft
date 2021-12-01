<template>
  <div class="topline">
    <topLine>
      <template #headline>
        <div class="topline___header">
          <div class="topline__logo">
            <logo color='black'></logo>
          </div>
          <div class="topline__user-icons">
            <profileIcons :source="this.user?.avatar_url" @onLogout="logout" @onUser="$router.push({name: 'profile'})" @onHome="$router.push({name: 'feeds'})"></profileIcons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in getUnstarredOnly" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: story.id}})"
            />
          </li>
        </ul>
      </template>
    </topLine>
  </div>
  <ul class="posts">
    <li class="posts-item" v-for="repos in this.starred" :key="repos.id">
      <post :nick="repos.owner.login" :path="repos.owner.avatar_url" :comm="getRepoOwner(repos)" @tooggleIssues='tooggleIssues(repos, $event)'>
        <template #description>
          <div class="post__content">
            <div class="post__title" v-text="repos.name"></div>
            <div class="post__description" v-text="repos.description">
            </div>
            <div class="post__starpanel"><counters :stars="repos.stargazers_count" :forks="repos.forks_count"></counters></div>
          </div>
        </template>
      </post>
    </li>
  </ul>
</template>
<script>
import { topLine } from '@/components/topline'
import { storyUserItem } from '@/components/storyUserItem'
import logo from '@/components/logo/logo.vue'
import profileIcons from '@/components/profileIcons/profileIcons.vue'
import { post } from '../../components/post'
import { counters } from '../../components/counters'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'feeds',
  components: {
    topLine,
    storyUserItem,
    post,
    logo,
    profileIcons,
    counters
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.data,
      starred: state => state.likedOfMe,
      user: state => state.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchLikedOfMe: 'fetchLikedOfMe',
      fetchUser: 'fetchUser',
      logout: 'logout',
      fetchIssue: 'fetchIssue'
    }),
    getReposData (repos) {
      return {
        title: repos.name,
        description: repos.description,
        username: repos.owner.login,
        stars: repos.stargazers_count
      }
    },
    getRepoOwner (repos) {
      return {
        repo: repos.name,
        owner: repos.owner.login
      }
    },
    async tooggleIssues (repos, event) {
      if (event && !Object.prototype.hasOwnProperty.call(repos, 'issuesList')) {
        try {
          await this.fetchIssue({ id: repos.id, owner: repos.owner.login, repo: repos.name })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  async created () {
    try {
      if (!this.trendings.length) {
        await this.fetchTrendings()
      }
    await this.fetchLikedOfMe()
    await this.fetchUser()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style src="./feeds.scss" lang="scss" scoped></style>
