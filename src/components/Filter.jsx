import React, {Component} from 'react'

export default class Filter extends Component{
    state = {
        date: '',
        category: '',
        tag: '',
        keyword: ''
    }

    handleChange = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleCategory = () => {
        let filters = this.state
        this.props.filterByCategory(filters)
    }

    handleTags = () => {
        let filters = this.state
        this.props.filterByTag(filters) // still need to pass this down through props
    }

    handleMonth = () => {
        let filters = this.state
        this.props.filterByMonth(filters)
    }

    handleKeyword = () => {
        let filters = this.state
        this.props.filterByKeyword(filters)
    }

    render(){
        let key = 0
        let purchases = this.props.purchases

        let categoriesWithDuplicates = purchases.map(element => element.category)
        let uniqueCategories = []
        for (let i = categoriesWithDuplicates.length - 1; i >= 0 ; i--){
            let unique = true;
            for (let j = 0 ; j < uniqueCategories.length; j++){
                if (uniqueCategories[j] === categoriesWithDuplicates[i]){
                    unique = false
                }
            }
            if (unique === true){
                uniqueCategories.push(categoriesWithDuplicates[i])
            }
        }

        let tagsWithDuplicatesArray = purchases.map(element => element.tags)
        let tagsWithDuplicates = []
        for (let i = 0 ; i < tagsWithDuplicatesArray.length; i++){
            tagsWithDuplicatesArray[i].forEach(tag => {tagsWithDuplicates.push(tag)})
        }
        let uniqueTags = []
        for (let i = tagsWithDuplicates.length - 1; i >= 0 ; i--){
            let unique = true;
            for (let j = 0 ; j < uniqueTags.length; j++){
                if (uniqueTags[j] === tagsWithDuplicates[i]){
                    unique = false
                }
            }
            if (unique === true){
                uniqueTags.push(tagsWithDuplicates[i])
            }
        }

        return(
            <div className="filter">
                <div>Filter your purchases (only use one):</div> 
                    <button  className="logSubmit" onClick={this.handleMonth} > 
                    Month:</button>
                    <select onChange={this.handleChange} name="date">
                    Month
                    <option value="" key={key++}>-</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <button  className="logSubmit" onClick={this.handleCategory} >
                Category:</button>
                <select onChange={this.handleChange} name="category">
                    Category:
                    <option value="" key={key++}>-</option>
                    {uniqueCategories.map(category => {
                        return <option value={category} key={key++}>{category}</option>
                    })}
                </select>

                <button  className="logSubmit" onClick={this.handleTags} > 
                Tag:</button>
                <select onChange={this.handleChange} name="tag">
                    Tags:
                    <option value="" key={key++}>-</option>
                    {uniqueTags.map(tag => {
                        return <option value={tag} key={key++}>{tag}</option>
                    })}
                </select>


                <input  onChange={this.handleChange} type="keyword" name='keyword' placeholder='keyword in memo'/>
                <button  className="logSubmit" onClick={this.handleKeyword} > Filter by Keyword</button>
            </div>
        )
    }
}

