import React from 'react';
import styles from './NeonCheckboxWidget.module.less';

export const NeonCheckboxWidget = props => (
	<label className={ styles.neonbutton }>
		<input type='checkbox' />
		<i className={`fa ${ props.fa }`}></i>
		<span></span>
	</label>
);