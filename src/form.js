import React , {useState} from 'react';

export default function Form({addChat}){

	const [input , setInput ]= useState('');

	const handleInput = e =>{
		console.log("REEEEEEEEEe")
		addChat(input)
	}

	return(
		<form onSubmit={handleInput}><input className='inputbox' onChange={e => setInput(e.target.value)}/></form>
	);
}