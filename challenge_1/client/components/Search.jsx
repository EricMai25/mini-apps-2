import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            query : ''
        }
    }
    render(){
        return(
            <div>
                <input onChange={(e)=>(this.props.query(e))} type='text'></input>
                <button onClick={()=>{this.props.search(this.state.query)}}>Search</button>
            </div>
        )
    }
}

export default Search