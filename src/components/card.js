import React from 'react';

//Card recebe o valor de suas propiedades do Componente CardList.
const Card = ({name, email, id}) => {
	return (
		<div 
		style={{border: '2px solid rgb(40, 127, 185)'}}
		className='tc dib white-80 br3 pa3 ma2 grow bw2 shadow-5'>
			<img  alt ='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>	
		</div>
	);//Aqui é feito o template do cartão do robo utilizando os classname dos tachyons. 
	//{} são utilizada para indicar codigo javascript(nesse caso os valores das propiedades)
}

export default Card;