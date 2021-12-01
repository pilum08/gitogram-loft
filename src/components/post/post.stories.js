import post from './post.vue'

export default {
  title: 'post',
  component: { post }
}

const template = () => ({
  components: { post },
  data () {
    return {
      comments: [{
        title: 'some-title',
        user: {
          login: 'some-login'
        }
      }],
      comm: {
        repo: 'name',
        owner: 'owner'
      }
    }
  },
  template: `
    <post 
      nick="Some nick"
      :comm="comm"
      path="https://picsum.photos/100/100" 
      :comments="comments"
    >
      <template #description>
        <h1>hello world!</h1>
      </template>
    </post>
  `
})

export const DefaultViewColumn = template.bind({})

DefaultViewColumn.story = {
  name: 'Пост'
}
