 <template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>{{title}}</h1>
      <div class="quote-area" v-html="portfolio.cooked">
        {{ portfolio.cooked }}
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
    data () {
      return {
        portfolio: {},
        title: ''
      }
    },
    created: function () {
      this.getWhichPortfolio()
    },
    methods: {
      getPortfolio (id) {
        axios.get('https://discourse.shuyanglin.com/t/' + id + '.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu')
          .then(result => {
            this.portfolio = result.data.post_stream.posts[0]
            this.title = result.data.title
          })
      },
      getWhichPortfolio () {
        axios.get('https://discourse.shuyanglin.com/c/1.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu')
          .then(result => {
            var that = this
            result.data.topic_list.topics.forEach(function (topic, index) {
              if (topic.slug === that.$route.params.slug) {
                that.getPortfolio(topic.id)
              }
            })
          })
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
