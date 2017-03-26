<template>
  <div class="container-fluid">
    <div class="row-fluid ">
      <div class="col-md-3">       
        <div class="sidebar">
          <div class="name-title">            
            {{me.title}}
          </div>

          <div class="self-intro">
            {{me.intro}}
          </div>
            
          <div class="info">
            {{me.info}}
            <div class="email">{{me.email}}</div>
          </div>

          <div class="download">
            {{me.download}}<br>
            <a v-bind:href="me.cv"><i class="icon-file-text-alt icon-2x"></i></a>
          </div>
        </div>

      </div>
      <div class="col-md-offset-1 col-md-8">
        <div class="container-fluid wall">
          <div class="row" v-for="items in row">         
            <div class="col-md-4" v-for="item in items">
              <div class="hovereffect">                
                <a v-bind:href="'portfolio/' + '{{item.slug}}'"> 
                  <img class="img-responsive" v-bind:src="item.cover" v-bind:alt="item.title">
                  <div class="overlay">
                    <h2>{{ item.title }}</h2>
                    <h4>{{ item.slogan }}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        me: {},
        teasers: [],
        row: [],
        count: 0
      }
    },
    created: function () {
      this.getMe()
      this.getTeasers()
    },
    methods: {
      getMe () {
        axios.get('https://discourse.shuyanglin.com/t/24.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu&include_raw=1')
          .then(result => {
            var raw = result.data.post_stream.posts[0].raw
            var that = this
            raw.split('----------').forEach(function (el, index) {
              el = el.trim()
              var exp = el.split(':')[1]
              switch (exp) {
                case 'sunflower':
                  that.me.title = el.replace(':sunflower:', '').trim()
                  break
                case 'smile':
                  that.me.intro = el.replace(':smile:', '').trim()
                  break
                case 'penguin':
                  that.me.info = el.replace(':penguin:', '').trim()
                  break
                case 'e-mail':
                  that.me.email = el.replace(':e-mail:', '').trim()
                  break
                case 'arrow_down':
                  that.me.download = el.replace(':arrow_down:', '').trim()
                  break
                case 'paperclip':
                  that.me.cv = el.replace(':paperclip:', '').trim()
                  break
              }
            })
            this.$set(this.me, 'me', this.me)
          })
      },
      getTeasers () {
        axios.get('https://discourse.shuyanglin.com/c/1.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu')
          .then(result => {
            this.teasers = result.data.topic_list.topics
            var that = this
            this.teasers.forEach(function (element, index) {
              if (element.title === 'Home') {
                that.teasers.splice(index, 1)
              } else {
                that.getTopics(element.id, index)
              }
            })
          })
      },
      getTopics (id, index) {
        axios.get('https://discourse.shuyanglin.com/t/' + id + '.json?api_key=69152bfd6780a4b8fe9105d1b616ccfc2de28706cbf16a2f0531fb6b08cf38e6&api_username=shu&include_raw=1')
          .then(result => {
            this.count += 1
            this.teasers[index].slug = result.data.slug
            var raw = result.data.post_stream.posts[0].raw
            var that = this
            raw.split('%%%%%')[0].split('\n').forEach(function (el, i) {
              var exp = el.split(' ')[0]
              switch (exp) {
                case '##':
                  that.teasers[index].title = el.replace('## ', '')
                  // console.log(that.teasers[index].title)
                  break
                case 'sort:':
                  that.teasers[index].sort = +el.replace('sort: ', '')
                  console.log('sort: ' + that.teasers[index].sort)
                  break
                case 'slogan:':
                  that.teasers[index].slogan = el.replace('slogan: ', '')
                  // console.log(that.teasers[index].slogan)
                  break
                case 'cover:':
                  that.teasers[index].cover = el.replace('cover: ', '')
                  // console.log(index)
                  // console.log(that.teasers[index])
                  break
                default:
                  break
              }
            })
            var sort = this.teasers[index].sort
            var colId = sort % 3
            var rowId = Math.floor(sort / 3)
            if (this.row[rowId] === undefined) { this.row[rowId] = [] }
            this.row[rowId][colId] = this.teasers[index]
            var total = this.teasers.length
            var totalRows = Math.floor((total - 1) / 3)
            if (this.count === total) {
              for (var i = 0; i < totalRows; i++) {
                this.row.splice(i, 1, this.row[i])
              }
            }
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
