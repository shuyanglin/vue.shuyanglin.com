<template>
  <div class="container-fluid">
    <div class="row-fluid ">
      <div class="col-md-3">
       
        <div class="sidebar">
             <div class="name-title">            
              Shu 
              Yang 
              Lin
             </div>

             <div class="self-intro">
             With double masters in Computer Science and Interaction Design, I work with international multidiscipline teams, support the team with design and prototypes in design process.  I am currently freelancing as a UX Designer and Front End Team Lead based in Irvine, California. <br>  I appreciate the beauty of business and the harmony of team work. <br>
         
             I am a maker with strong compassion, motivated by working on projects that values user experience and well being. I founded <a href="portfolio/griphint.html">Griphint</a>, an assistive learning tool designed for children with Autism.<br>
             <br>
             

             </div>

            <!--             
              <div class="menu">
              <ul>
                <li><i class="fa fa-file fa-fw"></i>Portfolio</li>
                <li><i class="fa fa-book fa-fw"></i>About</li>
                <li><i class="fa fa-user fa-fw"></i>Contact</li>
                <li><i class="fa fa-pencil fa-fw"></i>Blog</li>
              </ul>  
            </div> -->

            <div class="info">
              For more information, please contact:
              <div class="email">shuyanglin.tw@gmail.com</div>
            </div>

            <div class="download">
              Download my cv:<br>
              <a href="shuyanglin_cv.pdf"><i class="icon-file-text-alt icon-2x"></i></a>
            </div>
        </div>

      </div>
      <div class="col-md-offset-1 col-md-8">
        <div class="container-fluid wall">
          <div class="row">
            <div class="col-md-4">
                <div class="hovereffect">
                  <a href="portfolio/griphint.html">
                  <img class="img-responsive" src="img/griphint/griphint-teaser.jpg" alt="">
                  <div class="overlay">
                     <h2>Griphint</h2>
                     <h4>Design for Autistic children</h4>
                  </div>
                  </a>
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
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello to Your Vue.js App'
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
