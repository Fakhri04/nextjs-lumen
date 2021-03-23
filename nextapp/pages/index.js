import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Demo extends React.Component
{
  constructor() {
    super();
    this.state = {
       data: []
    }
    }
    componentDidMount() {
        //badel lurl héki mta3 lapi 
    axios.get("http://localhost:8000/product").then(response => {
    
    this.setState({ data : response.data });
    
    })
    }
  render()
  {
    return (
        <div>
            <div className="jumbotron text-center mb-0">
                <h1>NextJS</h1>
            </div>
           
            <div className="container mt-5 mb-5">
           
                    <h1>Product Data</h1>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((result) => {
                        return (
                        <tr>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        
                        </tr>
                        )})}
                    
                    </tbody>
                    </table>
               
            </div>
        
        </div>
    )
  }
}
export default Demo;