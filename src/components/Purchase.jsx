import React, {Component} from 'react'

import DeletePurchase from './DeletePurchase'
import EditPurchase from './EditPurchase'


export default class Purchase extends Component{
    state ={
        edit: false
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render(){
        let purchase = this.props.purchaseInfo
        return this.state.edit ? <EditPurchase toggleEdit={this.toggleEdit} purchaseInfo={this.props.purchaseInfo} editPurchase={this.props.editPurchase}/> : (
            <div 
                className="transaction"
                style={{borderTop: '1px solid black'}}>
                <div className="amount">${purchase.amount}</div>
                <div className="date">{purchase.date}</div>
                <div className="category">{purchase.category}</div>
                <div className="tags">{purchase.tags.map(tag => `#${tag}`)}</div>
                <div className="memo">{purchase.memo}</div>
                <div className="edit">
                    <button onClick={this.toggleEdit}>EDIT</button>
                </div>
                <DeletePurchase id={purchase.id} handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}