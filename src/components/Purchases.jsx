import React, {Component} from 'react'
import axios from 'axios'
import Purchase from './Purchase'
import LogPurchase from './LogPurchase'

export default class Purchases extends Component{
    state = {
        purchases: []
      }

    componentDidMount(){
        axios.get('/api/budget').then(res => {
            this.setState({
                purchases: res.data
            })
        }).catch( err => console.log('We have a problem: ',err))
    }

    logPurchase = (newPurchase) => {
        axios.post('/api/budget', newPurchase).then(res => {
            this.setState({
                purchases: res.data
            })
        }).catch( err => console.log('We have a problem: ', err))
    }

    handleDelete = (id) => {
        axios.delete(`/api/budget/${id}`).then(res => {
            this.setState({
                purchases: res.data
            })
        }).catch( err => console.log('We have a problem: ', err))
    }

    editPurchase = (purchase) => {
        axios.put(`/api/budget/${purchase.id}`, purchase).then(res => {
            this.setState({
                purchases: res.data
            })
        }).catch( err => console.log('We have a problem: ', err))
    }

    render(){
        return(
            <div>
                <LogPurchase logPurchase={this.logPurchase} />
                {this.state.purchases.map((p) => {
                    return <Purchase key={p.id} purchaseInfo={p} handleDelete={this.handleDelete} editPurchase={this.editPurchase}/>
                })}
            </div>

        )
    }
}