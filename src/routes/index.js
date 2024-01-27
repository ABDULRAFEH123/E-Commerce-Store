import MainView from '../views/MainView';
import AuthView from '../views/auth/AuthView';
import ItemDetails from '../views/ItemDetails';
import Craft from '../views/Craft';

let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},	
	{
		path: '/craft',
		component: Craft,
		layout: 'main',
	},
	{
		path: '/itemdetails',
		component: ItemDetails,
		layout: 'main',
	},

	
	
	


	
];
export default routes;