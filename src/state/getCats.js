import { renderCats } from "./render";
import { initialState } from "./state";

const getCats = () => {
    fetch("http://localhost:3000/cats/get")
    .then((res) => res.json())
    .then((cats) => {
        
        initialState.categories = cats;
        
        renderCats()
    })
}
export default getCats