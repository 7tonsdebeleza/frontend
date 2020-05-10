import { Component } from 'react';
import { withRouter } from "react-router-dom";

//Este componente dectará quando post for mudada no feed, fazendo componente recarregar

class PathTrigger extends Component{
	componentDidUpdate(prevProps){
		if(this.props.location.pathname !== prevProps.location.pathname){
			this.props.callBack()
		}
	}

	render(){
		return null;
	}
}

export default withRouter(PathTrigger);