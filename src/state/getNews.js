import getComm from "./getCommentaries";
import { render } from "./render";
import { initialState } from "./state";


const getNews = () => {
    fetch("http://localhost:3000/news/")
    .then((res) => res.json())
    .then((news) => {
        
        initialState.news = news;
        getComm()
        render()
    })
}
export default getNews
