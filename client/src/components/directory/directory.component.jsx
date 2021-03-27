import React from 'react';
import classes from './directory.module.scss';
import MenuItem from './../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from './../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
	<div className={classes.directorymenu}>
		{sections.map(({ id, ...otherProps }) => {
			return <MenuItem key={id} {...otherProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});

export default connect(mapStateToProps)(Directory);
