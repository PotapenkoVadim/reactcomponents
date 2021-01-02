import React from 'react';
import { DisplayWidget } from './DisplayWidget';
import { HoverPicWidget } from './hoverpic/HoverPicWidget';
import { NeonCheckboxWidget } from './neoncheckbox/NeonCheckboxWidget';
import { SearchWidget } from './searchwidget/SearchWidget';
import { RadioButton } from './radiobutton/RadioButton';
// import { ScrollbarWidget } from './scrollbar/ScrollbarWidget';

export class App extends React.Component {
	render() {
		return (
			<>
				<DisplayWidget title='Search Widget'>
					<SearchWidget />
				</DisplayWidget>

				<DisplayWidget title='Widget Neon Checkbox'>
					<NeonCheckboxWidget fa='fa-bug' />
					<NeonCheckboxWidget fa='fa-music' />
					<NeonCheckboxWidget fa='fa-home' />
				</DisplayWidget>

				<DisplayWidget title='RadioButton Widget'>
					<RadioButton
						id='cash'
						name='payment'
						fa='fa-money'
						title='cash'
					/>
					<RadioButton
						id='card'
						name='payment'
						fa='fa-credit-card'
						title='card'
					/>
					<RadioButton
						id='other'
						name='payment'
						fa='fa-star'
						title='other'
					/>
				</DisplayWidget>

				<DisplayWidget title='Widget Hover Effect'>
					<HoverPicWidget
						src='https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						alt='image'
					/>
					<HoverPicWidget
						src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						alt='pic'
					/>
				</DisplayWidget>
			</>
		);
	}
}