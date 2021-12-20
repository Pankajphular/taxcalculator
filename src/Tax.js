import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {invoices} from './data.json';
import {Button} from 'react-bootstrap';

class Tax extends Component {
  userRef=React.createRef();
  calcu(item_type,amount){
    if(item_type===0){
    return(
      this.userRef.current.value=amount*(5/100)
      )}
      else if(item_type===1){
        return(
          this.userRef.current.value=amount*(8/100)
          ) 
      }
      else{
        return(
          this.userRef.current.value=amount*(12/100)
        )
      }
  }
    render() {
        return (
            <div>
              <div className='tax'><h1> Calculate your Tax here </h1></div>
                <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>S.No.</th>
      <th>Amount</th>
      <th>Item_type</th>
      <th>Calculate</th>
    </tr>
  </thead>
  <tbody>
    {
      invoices.map((post, i)=>
      <tr>
      <td>{post.sno}</td>
      <td>{post.amount}</td>
      <td>{post.item_type}</td>
      <td><Button variant="light" onClick={()=>{this.calcu(post.item_type,post.amount)}}>Calculate Tax</Button></td>
    </tr>
      )
    }
    </tbody>
</Table>
<h2>Result:</h2>
<input style={{backgroundColor:"black", color:"aquamarine"}} type="text" ref={this.userRef}></input>
            </div>
        );
    }
}

export default Tax;