import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';

export default class Main extends Component {

	render() {
		return (
			<div className="paper-weight">
				<Paper className="paper-style" zDepth={1}>
					{this.props.children}
				</Paper>
			</div>
		)
	}
}