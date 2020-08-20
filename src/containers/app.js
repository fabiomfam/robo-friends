import React from 'react';
import SearchBox from '../components/searchbox';
import CardList from '../components/cardlist';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry.js';
import './app.css';
//robots é importado aqui e passa a ser usado em card e cardlist


class App extends React.Component{

	//Esse construtor permite que componentes vizinhos interajam entre si. 
	//Nesse caso o input na barra de pesquisa filtra o objeto robo.
	constructor(){
		super()
		this.state = {
			robo: [],
			//Campo de pesquisa começa vazio a medida que for inputado valores começara a filtragem.
			campoPesquisa: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( dados => {return dados.json(); })
			.then(usuarios => {this.setState({robo: usuarios}); })
	}

	//Quando ouver mudança na barra de pesquisa o valor de campoPesquisa passa a ser o valor inputado.
	emPesquisaAtiva = (event) => {
		this.setState({campoPesquisa: event.target.value})

	}
	//essa é a parte renderizada ao usuario.
	render(){
		//Metodo de filtragem: o metodo .filter() retorna os card que incluem os nomes que incluem o input
		//ou os emails que incluem o input
		const filtrarRobo = this.state.robo.filter(robo => {
			//No caso do nome usar .toLowerCase() facilita na busca, já o email não pode utilizar isso
			return (robo.name.toLowerCase().includes(this.state.campoPesquisa.toLowerCase()) || 
				robo.email.includes(this.state.campoPesquisa));
		})
		return (
			<div className='tc'>
				<nav className="navBar">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox className='searchBar'  emPesquisa={this.emPesquisaAtiva}/>
					<div></div>
					{/* O componente SearchBox utiliza a propiedade emPesquisa 
					e essa recebe o metodo emPesquisaAtiva */}
				</nav>
				{/*O componente CardList utiliza a propiedade robots(o objeto robo) 
				e essa recebe o metodo filtrarRobo,
				que retorna somente os valores filtrados do metodo. */}
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filtrarRobo}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;