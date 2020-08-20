import React from 'react';
import Card from './card';

//A propiedade robots recebes seus valores de App, esse valor sendo o objeto robots
const CardList = ({ robots }) => {
	return (
		<div>
			{//.map percorre o objeto robots e retorna o Componente Card 
				//atribuindo a ele os valores de robots com o indice no valor i.
				//Isso permite que o conteudo seja gerado de forma dinamica.
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					)		
				})
			}
		</div>
		);
}

export default CardList;