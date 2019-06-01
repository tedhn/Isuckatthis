import React , {useState } from 'react';
import './main.scss';

import Show from './msg';
import Form from './form';


export default function App(){
	const [chat , setChat] = useState([
		{ text: "Help",
			user: 'Y'
		},
    { text: "What",
			user: 'O'
		},
    { text: "What u want this time",
			user: 'O'
		},
    { text: "Help ME",
			user: 'Y'
		}
	]);

	const addChat = text =>{
		chat.push({ text:text , user:'Y'});
		console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
		setChat(chat);
		console.table(chat);
	};

	const show = ( {chat} ) => (	
			<div className={ chat.user=== 'O' ? 'messageboxO' : 'messageboxY'  }>
				<div className='message'>
					{chat.text}
				</div>
			</div>
	)

	return(
		<div className='app'>
				<div className='header'>
					
					<div className='contact'>
						<div className='image'></div>
						Fucking Jung
					</div>

				</div>
				
				<div>
					{chat.map( (text , index) =>(
						<Show chat={text} key={index}/>
					))}
				</div>
				{console.table(chat)}
				<Form addChat={addChat}/>

		</div>
	);
}
