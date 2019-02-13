<template lang="html">
    <div>
        <div class="bar" v-for="skill in skills" v-bind:skill ="skill" v-bind:key="skill.id">
              <div>{{skill.name}}</div>
              <div class="flex">
                  <div class="bar-color" :style="{width:skill.percent+'%'}"></div>
                  <div class="m-bar-text">{{skill.percent+"%"}}</div>
              </div>
              <div>{{skill.percent+"%"}}</div>
          </div>
    </div>

</template>

<script>
export default {
  name: 'skill-bar',
  data: function () {
    return {
      skills: [
        { id: 0, name: 'HTML', percent: 60 },
        { id: 1, name: 'CSS', percent: 40 },
        { id: 2, name: 'JQUERY', percent: 70 },
        { id: 3, name: 'VUE', percent: 30 },
        { id: 4, name: 'PHP', percent: 60 },
        { id: 5, name: 'PHOTOSHOP', percent: 40 },
        { id: 6, name: 'UNITY', percent: 20 },
        { id: 7, name: 'ANDROID', percent: 20 }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.bar {
    display: flex;
    margin-bottom: 25px;
}
.bar>div:nth-child(1) {
    width : 10%;
    text-align: right;
    padding-right: 40px;
}
.bar>div:nth-child(2) {
    background-color: #f5f5f5;
    width:75%;
    flex-direction: row;
    justify-content: flex-start;
}
.bar-color {
    background-color: #FFE05C;
    height: 30px;
    /* width : 0; */
}
.bar:nth-child(1) .bar-color {
    transition: 1.1s 0.2s width ease-in-out;
}
.bar:nth-child(2) .bar-color {
    transition: 1.2s 0.2s width ease-in-out;
}
.bar:nth-child(3) .bar-color {
    transition: 1.3s 0.2s width ease-in-out;
}
.bar:nth-child(4) .bar-color {
    transition: 1.4s 0.2s width ease-in-out;
}
.bar:nth-child(5) .bar-color {
    transition: 1.5s 0.2s width ease-in-out;
}
.bar:nth-child(6) .bar-color {
    transition: 1.6s 0.2s width ease-in-out;
}
.bar:nth-child(7) .bar-color {
    transition: 1.7s 0.2s width ease-in-out;
}
.bar:nth-child(8) .bar-color {
    transition: 1.8s 0.2s width ease-in-out;
}
.m-bar-text {
    display: none;
}
.bar>div:nth-child(3) {
    text-align: left;
    padding-left: 20px;
    width:10%;
}
</style>
