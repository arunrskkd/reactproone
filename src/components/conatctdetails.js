import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Contactdetails extends Component{
    render(){
       
        if(!this.props.activecontacts){
            return(
                <div>
                  please select a contact

                   </div> 
                

        )
        }
        return(
                <div>
                    <h1>Person name:{this.props.activecontacts.name}</h1>
                    <h1>Person Phone:{this.props.activecontacts.phone}</h1>
                    <button onClick={()=>{this.props.history.push('/')}}>back</button>
                   </div> 

        )
    }

}

function mapStateToProps(state){
    return{
        activecontacts:state.activecontacts

    }
}
export default withRouter(connect(mapStateToProps)(Contactdetails));