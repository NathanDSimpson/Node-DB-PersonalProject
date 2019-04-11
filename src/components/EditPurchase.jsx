import React, {Component} from 'react'

export default class EditPurchase extends Component{
    state = {
        amount: this.props.purchaseInfo.amount,
        date: this.props.purchaseInfo.date,
        category: this.props.purchaseInfo.category,
        memo: this.props.purchaseInfo.memo,
        tags: this.props.purchaseInfo.tags,
        id: this.props.purchaseInfo.id
    }

    handleInput = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let purchaseUpdate = this.state
        this.props.editPurchase(purchaseUpdate)        
        this.props.toggleEdit()
    }

    render(){
        return(
            <div>
                <input onChange={this.handleInput} type="text" name='amount' placeholder={this.props.purchaseInfo.amount}/>
                <input onChange={this.handleInput} type="text" name='date' placeholder={this.props.purchaseInfo.date}/>
                <input onChange={this.handleInput} type="text" name='category' placeholder={this.props.purchaseInfo.category}/>
                <input onChange={this.handleInput} type="text" name='memo' placeholder={this.props.purchaseInfo.memo}/>
                <input onChange={this.handleInput} type="text" name='tags' placeholder={this.props.purchaseInfo.tags}/>
                <button onClick={this.handleSubmit}>SUBMIT</button>
                {/* <button onClick={this.handleSubmit}>CANCEL</button> */}
            </div>
        )
    }
}