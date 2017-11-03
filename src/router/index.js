import Vue from 'vue';
import Router from 'vue-router';

// import HelloWorld from '@/components/HelloWorld';s
import Goods from '@/components/goods/goods';
import seller from '@/components/seller/seller';
import ratings from '@/components/ratings/ratings';

Vue.use(Router);

export default new Router({
	// mode:'history',
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    }, {
		path: '/goods',
		name: 'Goods',
		component: Goods
    },{
    	path:'/seller',
    	name:'seller',
    	component:seller
    },{
    	path:'/ratings',
    	name: ratings,
    	component:ratings
    }
  ]
});
