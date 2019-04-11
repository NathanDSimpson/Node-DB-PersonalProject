import React, {Component} from 'react'

export default class DeletePurchase extends Component{

    handleClick = () => {
        let id = this.props.id
        this.props.handleDelete(id)
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>DELETE</button>
            </div>
        )
    }
} 