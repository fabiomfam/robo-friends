import React from 'react';

//A propiedade usada aqui é emPesquisa
const SearchBox = ({emPesquisa}) => {
	return (
		<div className='pa2 measure'>
			<input 
				style={{width:'30vw'}}
				className='pa3 ba b--black-20'
				type='search' 
				placeholder='name or email' 
				onChange = {emPesquisa}
			/>
		{/*onChange é um evento no DOM, quando o valor do elemento muda (nesse caso a tag input) a função escolhida será iniciada*/}
		</div>
	)
}

export default SearchBox;