import React, { Component } from 'react';
import axios from 'axios';

class InputField extends Component {
    state = { longurl:"", returnedData:"", isLoading: false}

    handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            this.setState({isLoading: true});
            this.setState({returnedData: ""});
            const {data}= await  axios.post("https://url-shortner-backend-hnpf.onrender.com/api/url", {longurl:this.state.longurl});
            console.log(data);
            this.setState({returnedData:data});
            this.setState({isLoading: false});
        }
        catch(ex){
            this.setState({isLoading: false});
            this.setState({returnedData: ""});
            console.log("error connecting backend!");
        }
        
       
    }
    handleChange =(e) =>{
        console.log(e.target.value);
        this.setState({longurl:e.target.value});
    }
    
    componentDidMount(){
        this.setState({returnedData:""});
    }
    render() { 
      return ( <>
      
       <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={this.handleSubmit}>
       <p className="sub-heading">paste your long url here...</p>
        <input onChange={this.handleChange} type="text"/>
        <button type="submit" className="btn btn-primary m-3">GET</button>
        {this.state.isLoading && <p className="sub-heading">getting the short URL...</p>}
        {this.state.returnedData && this.state.longurl && !this.state.isLoading && <p className="sub-heading">{this.state.returnedData}</p>}
       </form>
      
        
      </> );
    }
  }
  
   
  export default InputField;
