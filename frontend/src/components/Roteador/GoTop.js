import { Component } from 'react';
import { withRouter } from "react-router-dom";

//Este componente levará o scroll para o topo da página quando a rota for mudada

class GoTop extends Component{
	componentDidUpdate(prevProps){
		if(this.props.location.pathname !== prevProps.location.pathname){
			window.scrollTo(0, 0);
		}
	}

	render(){
		return null;
	}
}

export default withRouter(GoTop);