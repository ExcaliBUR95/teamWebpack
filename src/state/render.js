import { initialState } from "./state";

export const render = () => {
  const root = document.getElementById("root");
  const ulList = document.createElement("ul");
  initialState.news.forEach((news) => {
    const list = document.createElement("li");
    list.textContent = news.title;
    ulList.append(list);
    root.append(ulList);
  });
};
