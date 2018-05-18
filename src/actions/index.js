import axios from 'axios';
const url = 'http://reduxblog.herokuapp.com/api/';
const api = '?key=PAPERCLIP1234';

export default  function fetchposts(){
    const request = axios.get(`${url}/posts/${api}`);
    return{
        type:'Fetch_posts',
        payload:request

    }
}