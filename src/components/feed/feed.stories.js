import feed from './feed.vue'

export default {
  title: 'feed',
  component: feed,
  argTypes: {
    toogle: {
      action: 'toogle',
      description: 'after Open'
    }
  }
}

const template = (args) => ({
  components: { feed },
  data () {
    return {
      comments: [{
        title: 'some-title1',
        user: {
          login: 'some-login1'
        }
      },
      {
        title: 'some-title2',
        user: {
          login: 'some-login2'
        }
      }],
      args
    }
  },
  template: `<feed v-bind="args" :comments="comments" @tooggleIssues="args.toogle"></feed>
  `
})

export const Default = template.bind({})

Default.story = {
  name: 'Переключатель'
}

const templateWithAction = (args) => ({
  components: { feed },
  data () {
    return {
      comments: [],
      args
    }
  },
  template: `<feed v-bind="args" :comments="comments" @tooggleIssues="args.toogle"></feed>
  `
})

export const DefaultWithAction = templateWithAction.bind({})

DefaultWithAction.story = {
  name: 'Комментарии отсутствуют'
}

const templateWithActionLoad = (args) => ({
  components: { feed },
  data () {
    return {
      comments: [],
      args
    }
  },
  template: `<feed v-bind="args" loading :comments="comments" @tooggleIssues="args.toogle"></feed>
  `
})

export const DefaultWithActionLoad = templateWithActionLoad.bind({})

DefaultWithActionLoad.story = {
  name: 'Комментарии отсутствуют + плейсхолдер'
}
