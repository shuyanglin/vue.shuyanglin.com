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
          <div class="row">
            <div class="col-md-4">            
                <div v-for="item in teasers">
                  <h1>{{ item.title }}</h1>
                  <h2>{{ item.slogan}}</h2>
                </div>
            </div>

            <div class="col-md-4">
                <div class="hovereffect">                
                   <a href="portfolio/memorymap.html"> 
                   <img class="img-responsive" src="img/memory_map/memorymap-teaser.jpg" alt="">
                   <div class="overlay">
                     <h2>Memory Map</h2>
                      <h4>Design for Alzheimer's</h4>
                  </div>
                  </a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="hovereffect">  
                  <a href="portfolio/letsmeet.html">
                    <img class="img-responsive" src="img/lets_meet/letsmeet-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>Let's Meet</h2>
                     <h4>Playful Scheduling</h4>
                  </div>
                  </a>
                </div>
            </div>

          </div>

          <div class="row">
            <div class="col-md-4">
                <div class="hovereffect">  
                  <a href="portfolio/skypeframe.html">
                    <img class="img-responsive" src="img/the_little_wooden_skype_frame/skypeframe-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>The Little Wooden<br> SKype Frame</h2>
                      <h4>Visualizing <br>The Sence of Time</h4>
                  </div>
                  </a>
                </div>
            </div>
            <div class="col-md-4">
               <div class="hovereffect"> 
                  <a href="portfolio/wishegg.html">
                    <img class="img-responsive" src="img/wish_egg/wishegg-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>Whish Egg</h2>
                      <h4>Reminisce with Touch</h4>
                  </div>
                  </a>
                </div>
            </div>
            <div class="col-md-4">
                <a href="portfolio/stairwhispers.html">
                <div class="hovereffect">  
                    <img class="img-responsive" src="img/stair_whispers/stairwispers-teaser.jpg" alt="">
                <div class="overlay">
                     <h2>Stair whispers</h2>
                     <h4>Visualizing Invisible</h4>
                  </div>
            
                </div>
                </a>
            </div>
            
          </div>

          <div class="row">
            <div class="col-md-4">
                <div class="hovereffect"> 
                  <a href="portfolio/pub.html">
                  <img class="img-responsive" src="img/pub/pub-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>Point Upon Body</h2>
                     <h4>Exploring Eyes-Free Interaction and Methods on an Arm</h4>
                  </div>
                  </a> 
          
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="hovereffect"> 
                   <a href="portfolio/haharesearch.html">
                   <img class="img-responsive" src="img/haha_research/haharesearch-teaser.jpg" alt="">
                   <div class="overlay">
                     <h2>Haha Research</h2>
                      <h4>Laughter in Message</h4>
                  </div>
                  </a>
          
                </div>
            </div>
            <div class="col-md-4">
                <div class="hovereffect"> 
                  <a href="portfolio/sonarwatch.html">
                  <img class="img-responsive" src="img/sonar_watch/sonarwatch-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>Sonar Watch</h2>
                     <h4>Appropriating the Forearm as a Slider Bar</h4>
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
        teasers: []
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
            var raw = result.data.post_stream.posts[0].raw
            var that = this
            // console.log(index + '::' + id)
            raw.split('%%%%%')[0].split('\n').forEach(function (el, i) {
              var exp = el.split(' ')[0]
              // console.log('exp: ' + exp + 'indexing: ' + indexing + 'index: ' + index)
              switch (exp) {
                case '##':
                  that.teasers[index].title = el.replace('## ', '')
                  // console.log(that.teasers[index].title)
                  break
                case 'slogan:':
                  that.teasers[index].slogan = el.replace('slogan: ', '')
                  // console.log(that.teasers[index].slogan)
                  break
                case 'cover:':
                  that.teasers[index].cover = el.replace('cover: ', '')
                  // console.log(that.teasers[index].cover)
                  break
                default:
                  break
              }
            })
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
