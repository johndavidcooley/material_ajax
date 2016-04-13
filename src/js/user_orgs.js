import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';

export default class UserOrgs extends Component {
	constructor(...args) {
		super(...args);

		this.state = { orgs:[] };
	}

componentWillMount() {
	let { user_name } = this.props.params;
	ajax(`https://api.github.com/users/${user_name}/orgs`).then(orgs => {
		this.setState({orgs})
	});
}

getOrgs(org) {
	return (
		<ListItem
			key={org.id}
			primaryText={org.login}
			leftAvatar={<Avatar src={org.avatar_url}/>}
			rightIcon={<DeviceHub />}
		/>
	)
}

	render() {
		let { orgs } = this.state;
		let { user_name } = this.props.params;
		return (
			<List subheader={`GitHub Orgs for ${user_name}`}>
				{orgs.map(::this.getOrgs)}
			</List>
		);
	}
}