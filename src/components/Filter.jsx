import React, {Component} from 'react'

export default class Filter extends Component{
    state = {
        month: '',
        year: '',
        category: '',
        tag: '',
        keywordInMemo: ''
    }

    // handleInput = event => {
    //     let {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit = () => {
        let newPurchase = this.state
        this.props.logPurchase(newPurchase)
    }

    render(){
        return(
            <div className="filter">
                <h4>Filter your purchases:</h4> <br/>
                <select  className="logEntry" name='month'/>
                <select  className="logEntry" name='year'/>
                <select  className="logEntry" name='category' />
                <select  className="logEntry" name='tag' />
                <select  className="logEntry" name='keywordInMemo' />
                <button  className="logSubmit" onClick={this.handleSubmit} > FILTER</button>
            </div>
        )
    }
}