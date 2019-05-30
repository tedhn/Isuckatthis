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
		const newChat = [...chat , [text , "Y"] ]
		console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
		setChat(newChat);
		console.table(chat)
	}

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

				<Form addChat={addChat}/>

		</div>
	);
}
