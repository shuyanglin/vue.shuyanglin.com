 <template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Free Chuck Norris Quote!</h1>
      <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
      <div class="quote-area" v-if="quote">
        <h2><blockquote v-html="quote">{{ quote }}</blockquote></h2>      
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'

  export default {
    data () {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote () {
        axios.get('https://talk.vtaiwan.tw/t/100.json')
          .then(result => {
            this.quote = result.data.post_stream.posts[0].cooked
          })
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
