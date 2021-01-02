import React from 'react';
import styles from './RadioButton.module.less';

export const RadioButton = props => (
	<>
		<input type='radio' name={ props.name } id={ props.id } />
		<label htmlFor={ props.id } className={ styles.radioButton }>
			<i className={`fa ${ props.fa }`}></i>
			<span>{ props.title }</span>
		</label>
	</>
);