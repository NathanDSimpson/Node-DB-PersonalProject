import React, {Component} from 'react'

export default class LogPurchase extends Component{
    state = {
        amount: 0,
        date: '',
        category: '',
        memo: '',
        tags: ''
    }

    handleInput = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let newPurchase = this.state
        this.props.logPurchase(newPurchase)
    }

    render(){
        return(
            <div>
                <h4>Log a new purchase!</h4>
                <input onChange={this.handleInput} type="text" name='amount' placeholder='amount'/>
                <input onChange={this.handleInput} type="text" name='date' placeholder='date'/>
                <input onChange={this.handleInput} type="text" name='category' placeholder='category'/>
                <input onChange={this.handleInput} type="text" name='memo' placeholder='memo'/>
                <input onChange={this.handleInput} type="text" name='tags' placeholder='tags'/>
                <button onClick={this.handleSubmit} > SUBMIT</button>
            </div>
        )
    }
}

