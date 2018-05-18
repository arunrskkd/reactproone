import selectcontact from '../actions/action_selcontact'

export default function(state=null,action){
    
    switch(action.type){
        case 'conatct_selected':
        return action.payload
        
    }

        return state;



}