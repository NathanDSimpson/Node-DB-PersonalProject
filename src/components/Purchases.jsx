import React, {Component} from 'react'
import axios from 'axios'
import Purchase from './Purchase'
import NavBar from './NavBar'

export default class Purchases extends Component{
    state = {
        purchases: [],
        filteredPurchases: [],
        filterToggle: false
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

    filterByCategory = filters => {
        let temp = this.state.purchases.filter( element => {
            return element.category === filters.category
        })
        if (filters.category === ''){
            this.setState({
                filterToggle: false
            })
        }else{
            this.setState({
                filteredPurchases: temp
            })
            this.setState({
                filterToggle: true
            })
        }
    }

    filterByTag = filters => {
        let temp = this.state.purchases.filter(element => {
            let match = false
            element.tags.forEach(tagElement => {
                if (tagElement === filters.tag){
                    match = true
                }
            })
            return match
        })
        if (filters.tag === ''){
            this.setState({
                filterToggle: false
            })
        }else{
            this.setState({
                filteredPurchases: temp
            })
            this.setState({
                filterToggle: true
            })
        }
    }

    filterByMonth = filters => {
        let temp = this.state.purchases.filter(element => {
            let match = false
            let date = element.date.split('/')
            if (+date[0] === +filters.date){  
                match = true
            }
            return match
        })
        this.setState({
            filteredPurchases: temp
        })
        if (filters.date === ''){
            this.setState({
                filterToggle: false
            })
        }else{
            this.setState({
                filterToggle: true
            })
        }
    }

    filterByKeyword = filters => {
        let temp = this.state.purchases.filter(element => element.memo.includes(filters.keyword))
        this.setState({
            filteredPurchases: temp
        })
        if (filters.keyword === ''){
            this.setState({
                filterToggle: false
            })
        }else{
            this.setState({
                filterToggle: true
            })
        }
    }
   
    

    render(){
        let displayArray = []
        if (this.state.filterToggle === false){
            displayArray = this.state.purchases
        } else{
            displayArray = this.state.filteredPurchases
        }
        let totalSpending = 0
        displayArray.forEach(element => {
            totalSpending += element.amount
        })
        console.log(totalSpending)

        return(
            <div>
                <NavBar logPurchase={this.logPurchase} purchases={this.state.purchases} filterByCategory={this.filterByCategory} filterByTag={this.filterByTag} filterByMonth={this.filterByMonth} filterByKeyword={this.filterByKeyword} totalSpending={totalSpending}/>
                <div className="purchases">
                    {displayArray.map((p) => {
                        return <Purchase 
                                key={p.id} 
                                purchaseInfo={p} 
                                handleDelete={this.handleDelete} 
                                editPurchase={this.editPurchase}/>
                    })}
                </div>
            </div>

        )
    }
}