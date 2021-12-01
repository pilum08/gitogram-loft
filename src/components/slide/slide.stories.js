import slide from './slide.vue'

export default {
  title: 'slide',
  component: slide,
  argTypes: {
    onNextSlide: {
      action: 'onNextSlide',
      description: 'after button NextSlide'
    },
    onPrevSlide: {
      action: 'onPrevSlide',
      description: 'after button PrevSlide'
    },
    onProgressFinish: {
      action: 'onProgressFinish',
      description: 'after progress'
    }
  }
}

const template = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>',
        following: {
          status: false,
          loading: false,
          error: ''
        }
      },
      args
    }
  },
  template: `<slide
                    :data="data" 
            />`
})

export const Default = template.bind({})
Default.story = {
  name: 'Слайд неактивный'
}

const templateNoContent = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '',
        following: {
          status: false,
          loading: false,
          error: ''
        }
      },
      args
    }
  },
  template: `<slide
              :data="data"
            />`
})

export const DefaultNoContent = templateNoContent.bind({})
DefaultNoContent.story = {
  name: 'Слайд без контента'
}

const templateActive = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>',
        following: {
          status: false,
          loading: false,
          error: ''
        }
      },
      args
    }
  },
  template: `<slide
              :data="data"
              active
              @onNextSlide="args.onNextSlide"
              @onPrevSlide="args.onPrevSlide"
              @onProgressFinish="args.onProgressFinish"
            />`
})

export const DefaultActive = templateActive.bind({})
DefaultActive.story = {
  name: 'Слайд активный'
}
