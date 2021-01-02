import React from 'react';
import styles from './HoverPicWidget.module.less';

export const HoverPicWidget = props => (
	<div className={ styles.wrapper }>
		<img src={ props.src } alt={ props.alt } />
	</div>
);