import fetchposts from '../actions/index'


export default function(state=null,action){
    
    switch(action.type){
        case 'Fetch_posts':
        console.log(action.payload)
        
    }
        return state;
}