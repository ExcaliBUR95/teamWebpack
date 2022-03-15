import getNews from "./getNews";
import { render, renderCommentaries } from "./render"
import { initialState } from "./state"


const getComm = () =>{
 
    console.log(initialState.news);
    fetch(`http://localhost:3000/comments/${initialState.news[0]._id}`) 
    .then((res) => res.json())
    .then((comm) => {
        initialState.comments = comm
        
        renderCommentaries()
        
        
    })
}

export default getComm