import React from 'react';
import styles from './SearchWidget.module.less';

export const SearchWidget = porps => (
	<div className={ styles.search }>
		<input type='search' placeholder="Type to search" />
		<button>
			<i className='fa fa-search'></i>
		</button>
	</div>
);