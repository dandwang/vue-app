<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab">
      <div  class="tab-item"><router-link to='/goods'>商品</router-link></div>
      <div class="tab-item"><router-link to='/ratings'>评论</router-link></div>
      <div class="tab-item"><router-link to='/seller'>商家</router-link></div>
      
    </div>
    <router-view></router-view>
    <div class="content">
      content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data() {
      return{
        seller:{}
      }
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        if(res.data.errno===0){
          this.seller=res.data.data;
          
        }else{

        }
      }).catch((res) =>{
        console.log(res);
      })
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="scss" scoped="" type="text/css">
  .tab{
    display: flex;
    width:100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid red;
    .tab-item{
      flex:1;
      text-align: center;
      display:block;
      a.router-link-active{
        color:red;
      }
    }
  }
</style>