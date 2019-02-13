<template lang="html">
  <img  alt="" class="screenshot fade" v-show="show">
</template>

<script>
export default {
    name : 'slide-image',
    data : function() {
        return {
            show : false
        }
    },
    created : function() {
        this.$emit('show-slides',1)
    }
}
</script>

<style lang="css" scoped>
</style>
