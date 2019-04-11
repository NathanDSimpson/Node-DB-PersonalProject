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
            <div style={{border: '1px solid black', margin: 10}}>
                <p>${purchase.amount}</p>
                <p>Date:  {purchase.date}</p>
                <p>Category:  {purchase.category}</p>
                <p>Memo:  {purchase.memo}</p>
                <p>Tags:  {purchase.tags}</p>
                <button onClick={this.toggleEdit}>EDIT</button>
                <DeletePurchase id={purchase.id} handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}