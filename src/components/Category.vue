 <template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Free Chuck Norris Quote!</h1>
      <div class="quote-area" v-for="category in categories">
        <h3>{{ category.name }}</h3>
        <ul>
          <li v-for="topic in category.topics">
            {{ topic.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'

  export default {
    data () {
      return {
        categories: []
      }
    },
    created: function () {
      this.getCategories()
    },
    methods: {
      getCategories () {
        axios.get('https://discourse.shuyanglin.com/categories.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu')
          .then(result => {
            this.categories = result.data.category_list.categories
            var that = this
            console.log('cat')
            this.categories.forEach(function (element, index) {
              that.getTopics(element.id, index)
              console.log('index:' + index)
            })
          })
      },

      getTopics (id, index) {
        console.log('top')
        axios.get('https://discourse.shuyanglin.com/c/' + id + '.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu')
          .then(result => {
            this.categories[index].topics = result.data.topic_list.topics
            this.categories[0].name = 'topic1'
            this.categories.splice(index, 1, this.categories[index])
          })
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
