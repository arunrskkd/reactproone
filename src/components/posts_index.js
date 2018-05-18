import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  selectcontact  from '../actions/action_selcontact'
import { withRouter } from 'react-router-dom';
 class Postindex extends Component {

  renderlist(){
   
    return this.props.contacts.map(
      (contact) => {
        return(
          <li onClick={()=>{this.props.selectcontact(contact)
            this.props.history.push('/details')
          }}  className='list-group-item' key={contact.name}>
            {contact.name}         
          </li>
         
        );
        
      }
    );

  }



  render() {
    return (
     <ul className = 'list-group col-sm-4'>
       {this.renderlist()}

     </ul>
    
    );
  }
}


function mapStateToProps(state){
  return{
    contacts:state.contacts

  }

}


export default withRouter( connect(mapStateToProps,{selectcontact})(Postindex));