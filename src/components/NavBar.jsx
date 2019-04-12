import React, {Component} from 'react';
import TableHeaders from './TableHeaders';
import Filter from './Filter';
import LogPurchase from './LogPurchase';
import axios from 'axios'


export default class NavBar extends Component{

    logPurchase = (newPurchase) => {
        axios.post('/api/budget', newPurchase).then(res => {
            this.setState({
                purchases: res.data
            })
        }).catch( err => console.log('We have a problem: ', err))
    }

    render(){
        return(
            <div className='navBar'>
                <h1> Budget Buddy</h1>
                <div className="menu">
                    <Filter/>
                    <LogPurchase logPurchase={this.logPurchase} />
                </div>
                <TableHeaders/>
            </div>
        )
    }
}