<template lang="html">
    <div class="flex" id="project_popup" v-if="popupState" v-on:click.self="popupClose">
        <div class="">
            <div class="project_content">
                <div class="screenshot_wrap">
                    <slide-image v-for="(img,index) in imageSrc" :key="index" :src="require('../assets/images/project/'+img.file)"
                        @show-slides="showSlides"
                        :style="{'width':img.width}"
                    ></slide-image>
                </div>
                <div class="slide_btn_wrap">
                    <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
                    <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
                </div>
            </div>
            <div class="project_info">
                <div class="name">
                    {{name}}
                </div>
                <div class="language">
                    {{language}}
                </div>
                <div class="description" v-html="description">
                </div>
            </div>
            <div class="close_btn">
                <span @click="popupClose">X</span>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../EventBus'
import SlideImage from './SlideImage.vue'

export default {
  name: 'project-popup',
  components: {SlideImage},
  created: function () {
    eventBus.$on('popup-show', this.popupShow)
  },
  data: function () {
    return {
      popupState: false,
      name: '',
      language: '',
      description: '',
      imageSrc: [],
      slideIndex: 1
    }
  },
  methods: {
    popupShow: function (data) {
      this.popupState = true
      this.name = data.name
      this.language = data.language
      this.description = data.description
      this.imageSrc = data.src
    },
    popupClose: function () {
      this.popupState = false
      this.slideIndex = 1
    },
    plusSlides: function (n) {
      this.showSlides(this.slideIndex += n)
    },
    showSlides: function (n) {
      var i
      var slides = this.$children
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].show = false
      }
      slides[this.slideIndex - 1].show = true
    }
  }
}
</script>

<style lang="css" scoped>
/* project popup */
#project_popup {
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    top: 0;
}
#project_popup > div {
    background-color: white;
    width: 50%;
    height: auto;
    position: relative;
}
.project_info {
    text-align: left;
    padding: 40px 40px 0 40px;
}
.project_info .name {
    font-size: 15pt;
    font-weight: bold;
    margin-bottom: 10px;
}
.project_info .language {
    color: #c0c0c0;
    font-weight: bold;
    font-size: 13pt;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}
.project_info .description {
    line-height: 25px;
    padding-top: 15px;
    font-size: 11pt;
}

.project_content {
    border-bottom: 2px solid #eee;
    position: relative;
}
.screenshot {
    width:100%;
    height: 500px;
}
.slide_btn_wrap {
    position: absolute;
    top: 50%;
    width: 100%;
}
.prev, .next {
    cursor: pointer;
    position: absolute;
    width: auto;
    margin: 0 15px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select:none;
    background: rgba(0, 0, 0, 0.3);
}
.prev {
    left : 0;
}
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}
@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
.close_btn {
    text-align: right;
    padding: 20px 30px;
    font-size: 20pt;
    color: #999;
    font-weight: bold;
}
.close_btn span {
    cursor: pointer;
    padding: 10px 30px;
    position: absolute;
    right: 0;
    bottom: 0;
}
@media screen and (max-width:900px) {
    #project_popup > div {
        width : 100%;
        height: 100%;
    }
    .screenshot {
        height: 300px;
    }
    .project_info {
        padding: 20px 10px 0 10px;
    }
    .project_info .name {
        font-size: 12pt;
    }
    .project_info .language {
        font-size : 10pt;
    }
    .project_info .description {
        font-size : 9pt;
        line-height: 20px;
    }
    .close_btn {
        padding : 20px 20px;
        font-size: 20pt;
    }
    .close_btn span {
      padding: 10px 10px;
    }
    .slide_btn_wrap {
        top : 40%;
    }

}
</style>
