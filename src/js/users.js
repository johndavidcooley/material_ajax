import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import PersonIcon from 'material-ui/lib/svg-icons/social/person';

export default class Users extends Component {



	render() {

		let { users } = this.props.params;

		return (
			<List subheader="GitHub Users">
				<Link to="/user_orgs/jisaacks">
				    <ListItem
				    	primaryText="jisaacks"
				        rightIcon={<PersonIcon />}
				    />
			    </Link>
			    <Link to="/user_orgs/sindresorhus">
				    <ListItem
				        primaryText="sindresorhus"
				        rightIcon={<PersonIcon />}
				    />
			    </Link>
				    <Link to="/user_orgs/addyosmani">
				    <ListItem
				        primaryText="addyosmani"
				        rightIcon={<PersonIcon />}
				    />
			    </Link>
				    <Link to="/user_orgs/wycats">
				    <ListItem
				        primaryText="wycats"
				        rightIcon={<PersonIcon />}
				    />
			    </Link>
				    <Link to="/user_orgs/dhh">
				    <ListItem
				        primaryText="dhh"
				        rightIcon={<PersonIcon />}
				    />
			    </Link>
		    </List>
		);
	}
}