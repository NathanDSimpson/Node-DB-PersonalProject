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
            <div className="logger">
                <h4>Log a new purchase:</h4> <br/>
                <input  className="logEntry" onChange={this.handleInput} type="text" name='amount' placeholder='amount'/>
                <input  className="logEntry" onChange={this.handleInput} type="text" name='date' placeholder='date'/>
                <input  className="logEntry" onChange={this.handleInput} type="text" name='category' placeholder='category'/>
                <input  className="logEntry" onChange={this.handleInput} type="text" name='memo' placeholder='memo'/>
                <input  className="logEntry" onChange={this.handleInput} type="text" name='tags' placeholder='tags'/>
                <button className="logSubmit" onClick={this.handleSubmit} > SUBMIT</button>
            </div>
        )
    }
}

