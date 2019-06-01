import React , {useState} from 'react';

export default function Form( {addChat} ){

	const [value , setValue ]= useState('');

	const handleInput = e =>{
		addChat(value);
		setValue('');
	}

	return(
		<form onSubmit={handleInput}><input className='inputbox' onChange={e => setValue(e.target.value)}/></form>
	);
}