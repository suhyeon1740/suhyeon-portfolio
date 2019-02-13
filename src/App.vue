<template>
    <div id="app" v-on:scroll="scrollHandler" v-cloak>
          <scrollactive class="menu_box" v-bind:class="fixedClass">
              <a id="trigger" v-show="triggerState" @click="mobileMenu"></a>
              <div class="menu_inner" v-show="menuState" >
                  <a href="#home" class="scrollactive-item">HOME</a>
                  <!-- <a href="#about"  class="scrollactive-item">ABOUT</a> -->
                  <a href="#skills" ref="about" class="scrollactive-item">SKILLS</a>
                  <a href="#portfolio" class="scrollactive-item">PROJECTS</a>
                  <a href="#contact" class="scrollactive-item">CONTACT</a>
              </div>
          </scrollactive>
          <!--HOME-->
          <section id="home" class="flex">
              <div class="home-center">
                  <div class="home-text">
                      Web developer <span class="highlight">박수현</span>.
                  </div>
                  <div class="home-button" @click="goAbout">
                      <span class="view-btn" onkeyup="">View my work<i class="fas fa-arrow-down"></i></span>
                  </div>
              </div>
          </section>
          <!-- <section id="about">
              <div class="inner flex">
                  <h1 class="header animated waypoint" data-animated="slideInLeft">ABOUT</h1>
                  <div class="header-bar animated waypoint" data-animated="slideInLeft"></div>
              </div>
          </section> -->
          <section id="skills" class="flex">
              <div class="inner flex">
                  <h1 class="header animated waypoint" data-animated="slideInLeft">SKILLS</h1>
                  <div class="header-bar animated waypoint" data-animated="slideInLeft"></div>
                  <div class="chart waypoint animated" id="chart" data-animated="slideInRight">
                      <skill-bar> </skill-bar>
                  </div>
              </div>
          </section>
          <section id="portfolio" class="flex">
              <div class="inner flex">
                  <h1 class="header waypoint animated" data-animated="slideInRight">PROJECTS</h1>
                  <div class="header-bar waypoint animated" data-animated="slideInRight"></div>
                      <gallery></gallery>
                      <project-popup></project-popup>
              </div>
          </section>
          <section id="contact" class="flex">
              <div class="inner flex">
                  <h1 class="header animated waypoint" data-animated="slideInLeft">CONTACT</h1>
                  <div class="header-bar animated waypoint" data-animated="slideInLeft"></div>
                  <div class="email">
                      email : suhyeon1740@gmail.com
                  </div>
                  <a href="https://github.com/suhyeon1740/Portfolio">
                      <img src="./assets/images/GitHub-Mark/GitHub-Mark-Light-64px.png" alt="">
                  </a>
              </div>
          </section>
      </div>
</template>

<script>
import SkillBar from './components/SkillBar.vue'
import Gallery from './components/Gallery.vue'
import ProjectPopup from './components/ProjectPopup.vue'

export default {
    name: 'app',
    components: {
        SkillBar,Gallery,ProjectPopup
    },
    data : function() {
        return {
            fixedClass : {
                fixed : false
            },
           triggerState : false,
           menuState : true
        }
    },
    methods : {
       scrollHandler : function() {
           //메뉴바 FIXED
           if(window.scrollY > 100 ) {
               this.fixedClass.fixed = true
               this.triggerState=true;
           } else {
               this.fixedClass.fixed = false
               this.triggerState=false;

               if(window.innerWidth<=360) this.menuState=false;
           }
       },
       goAbout : function() {
           this.$refs.about.click();
       },
       mobileMenu : function() {
           this.menuState = !this.menuState;
       },
       handleResize : function() {
           if(window.innerWidth>360) this.menuState=true;
           else this.menuState = false;
       }
   },
   created() {
       window.addEventListener('scroll',this.scrollHandler);
       window.addEventListener('resize',this.handleResize);
   },

}
</script>

<style>
[v-cloak] { display: none;}
@font-face { font-family: 'NanumGothic';
    src: url('./assets/fonts/NanumGothic.eot');
    src: url('./assets/fonts/NanumGothic.eot') format('embedded-opentype'),
    url('./assets/fonts/NanumGothic.woff') format('woff');
}
* {
    margin: 0;
    padding: 0;
    font-family: NanumGothic;
}
body,html,#app {
    height: 100%;
}
ul,li {
    list-style: none;
}
section {
    height: 100%;
}
/* nav */
.menu_box {
    width: 100%;
    height: 50px;
    position: fixed;
    transition:all 0.5s ease-in-out;
    -webkit-transition:all 0.5s ease-in-out;
    z-index: 99;
}

.menu_inner {
    width: 63%;
    height:50px;
    margin:0 auto;
}
.fixed {
    background-color: #1B242F;
    border-bottom: 3px solid #FFE05C;
    transition:all 0.5s ease-in-out;
    -webkit-transition:all 0.5s ease-in-out;
}
/* .menu_box .menu_inner > ul {
    float : left;
    padding: 0 35px 0 0;
} */

/* .menu_inner li {
    float: left;
    text-align: center;
    margin-left: 50px;
} */
.is-active {
    color : #E31B6D !important;
}
.menu_inner a {
    text-decoration: none;
    color : #fff;
    line-height: 50px;
    font-size: 17px;
    display: inline-block;
    margin-left: 50px;
}
.menu_inner a:hover {
    color : #E31B6D;
    transition:all 0.5s ease-in-out;
}
nav a#trigger {
    display: none;
}
/* common */
.flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
}
.header {
    font-size: 30pt;
    position: relative;
}
/* .waypoint {
    opacity: 0;
} */
.header-bar {
    width : 100px;
    height: 4px;
    background: #000;
    margin : 0 auto;
}
.inner {
    width: 63%;
    margin : 0 auto;
    padding: 80px 0;
}

/*animation*/
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-300px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {

  from {
      opacity: 0;
      transform: translateX(300px);
  }
  to {
      opacity: 1;
      transform: translateX(0);
  }
}

@keyframes slideUp {
    from {
        transform: translateY(300px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes slideUpBtn {
    from {
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.slideInRight {
  animation: slideInRight .75s ease both;
}
.slideInLeft {
    animation: slideInLeft .75s ease both;
}
.slideUp {
    animation: slideUp .75s ease both;
}

/* home */
#home {
    width:100%;
    height:100%;
    background: url('./assets/images/home_bg.jpg') no-repeat center center;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
}
.home-text {
    font-size: 50pt;
    color: #E31B6D;
}
.highlight {
    color : #fff;
}
.view-btn {
    display:inline-block;
    padding: 10px 25px;
    margin : 20px 20px;
    border : 2px solid #fff;
    text-align: center;
    text-decoration: none;
    color : white;
    font-size: 16pt;
    transition:all 0.3s;
}
.view-btn:hover {
    background-color: #04C2C9;
    transition:all 0.3s;
    border : 2px solid #04C2C9;
}
.view-btn > i {
    padding-left: 10px;
    top: 5px;
}
/* about */
#about { width:100%; height:100%; background:#f5f5f5; }

.chart {
    margin: 100px 20px;
    width: 100%;
}

#portfolio { width:100%;background:#f5f5f5; }

/* contact */
#contact {
    /* height: 100%; */
    background: #1B242F;
    color: white;
}
#contact .header-bar {
    background: white;
}

#contact .email {
    margin: 80px;
    font-size: 20pt;
    font-weight: bold;
}

@media screen and (max-width:1830px) {
    #portfolio {
        height: auto;
    }
}
@media screen and (max-width:740px) {
    /* .menu_inner {
        width: 100%;
    } */
    section {
        height: auto;
    }
    .menu_inner {
        width: 100%;
        height: auto;
        position: relative;

    }
    nav a {
        display: block;
        float: none;
        width: 100%;
        background-color: #1B242F;
        margin-left: 0px !important;
        border-bottom: 1px solid #576979;
        text-align: center;
    }
     nav a#trigger {
        display:block;
        width: 100%;
        height: 50px;
        /* background-color: #1B242F; */
        border-bottom: 3px solid #FFE05C;
    }
    nav a#trigger:after {
        content: "";
        background: url('./assets/images/nav.png') no-repeat center;
        width:30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 10px;

    }
    #home {
        height: 100%;
    }
    .home-text {
        font-size: 20pt;
    }
    #about {
        height: auto;
    }
    .header {
        font-size: 20pt;

    }
    .inner {
        width: 100%;
        padding: 50px 0;
    }
    .chart {
        margin: 50px 20px;
        width: 90%;
    }
    .bar {
        font-size: 8pt;
    }
    .bar>div:nth-child(1) {
        width: 25%;
        padding-right: 10px;
        text-align: left;
    }
    .bar>div:nth-child(2) {
        width: 75%;
        position: relative;
        height: 30px;
    }
    .bar>div:nth-child(3) {
        display: none;
    }
    .bar-color {
        position: absolute;
        left: 0;
        top: 0;
    }
    .m-bar-text {
        position: absolute;
        right: 0;
        display: block;
        padding-right: 5px;
    }
    .slideInRight {
      animation: none;
      opacity: 1;
    }
    .slideInLeft {
        animation: none;
        opacity: 1;
    }
    #contact .email {
        font-size: 17pt;
    }
}

</style>
