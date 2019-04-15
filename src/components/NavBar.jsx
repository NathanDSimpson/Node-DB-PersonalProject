import React, {Component} from 'react';
import TableHeaders from './TableHeaders';
import Filter from './Filter';
import LogPurchase from './LogPurchase';

export default class NavBar extends Component{


    render(){
        return(
            <div className='navBar'>
                <br/>
                <div className="menu">
                    <h1>Budget Buddy</h1>
                    <Filter purchases={this.props.purchases} filterByCategory={this.props.filterByCategory}/> <br/>
                    <LogPurchase logPurchase={this.props.logPurchase} /><br/>
                    <p>
                        TOTAL:  $1000.00
                    </p>
                </div>
                <TableHeaders/>
            </div>
        )
    }
}