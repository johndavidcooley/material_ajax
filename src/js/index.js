// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Link, Router, Route, IndexRoute } from 'react-router';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import NProgress from 'react-nprogress';
import Users from './users';
import UserOrgs from './user_orgs';
import Main from './main';

render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Users} />
			<Route path="/user_orgs/:user_name" component={UserOrgs} />
		</Route>
	</Router>,
	document.querySelector('.app')
	)