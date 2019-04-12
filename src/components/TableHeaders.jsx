import React, {Component} from 'react';

export default class TableHeaders extends Component{
    render(){
        return(
            <div className="transactionHeader">
                <h3 className="amountHeader" >AMOUNT</h3>
                <h3 className="dateHeader">DATE</h3>
                <h3 className="categoryHeader">CATEGORY</h3>
                <h3 className="memoHeader">MEMO</h3>
                <h3 className="tagsHeader">TAGS</h3>
                <div className="editHeader"></div>
                <div className="deleteHeader"></div>
            </div>
        )
    }
}