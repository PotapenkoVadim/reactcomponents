import React from 'react';
import styles from './ScrollbarWidget.module.less';

export const ScrollbarWidget = props => (
	<p className={ styles.scroll }>{ props.children }</p>
);