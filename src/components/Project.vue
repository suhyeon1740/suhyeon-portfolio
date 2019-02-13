<template lang="html">
    <div class="project flex" v-on:mouseover="btnShow" v-on:mouseout="btnHide">
        <div class="more-btn view-btn" v-on:click="btnClick()" v-show="btnState">
            LEARN MORE
        </div>
    </div>
</template>

<script>

export default {
  name: 'project',
  data: function () {
    return {
      btnState: false
    }
  },
  methods: {
    btnShow: function () {
      this.btnState = true
    },
    btnHide: function () {
      this.btnState = false
    },
    btnClick: function () {
      this.$emit('child-event', this.$vnode.key)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
