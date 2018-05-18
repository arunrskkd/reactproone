import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import fetchposts from '../actions/index'
 class Postpage extends Component {
  componentDidMount(){
    this.props.fetchposts();
  }

  renderlist(){
  // console.log(this.props.post)
  }
  
  render() {
    if(!this.props.post){
      return (
        <div >
       no posts
        
        </div>
    
       
      );
    }
    return (
      <div >
      {this.renderlist()}
      
      </div>
  
     
    );
  }
}

function mapStateToProps(state){
  return{
    post:state.posts
  }

}

export default connect(mapStateToProps,{fetchposts})(Postpage);