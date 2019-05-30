import React from 'react';

export default function Show( {chat}){
	return (
			<div className={ chat.user=== 'O' ? 'messageboxO' : 'messageboxY'  }>
				<div className='message'>
					{chat.text}
				</div>
			</div>
	);
}
