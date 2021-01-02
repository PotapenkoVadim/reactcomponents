import React from 'react';
import styles from './DisplayWidget.module.less';

export const DisplayWidget = props => (
	<div className={ styles.widgetDisplay }>
		<h3 className={ styles.widgetTitle }>{ props.title }</h3>
		{ props.children }
	</div>
);