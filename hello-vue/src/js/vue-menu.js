Vue.component('vue-menu', {
  props: ['ecosystem'],
  template:
    `<nav>
      <ul>
        <li v-for='(techItem) in ecosystem'>
          <a v-bind:href="techItem.link">{{techItem.title}}</a>
        </li>
      </ul>
    </nav>`
})
new Vue({
  el: '#navbar',
  data: {
    vueEcosystem: [
      { id: 0, title: 'Home', link: './index.html' },
      { id: 1, title: 'Vue CDN', link: './1-vue-cdn.html' },
      { id: 2, title: 'Vue If', link: './2-vue-if.html' },
      { id: 3, title: 'Vue For', link: './3-vue-for.html' },
      { id: 4, title: 'Vue For (exercise)', link: './3.1-vue-for-exercise.html' },
      { id: 5, title: 'Vue components', link: './4-vue-component.html' },
      { id: 6, title: 'Vue methods', link: './5-vue-methods.html' },
    ]
  }
})
