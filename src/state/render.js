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
export const renderCommentaries = () => {
  const root = document.getElementById("root")
  const ulCommentaries = document.createElement('ul')
  initialState.comments.forEach((comm) => {
    const list_2 = document.createElement('li')
    list_2.textContent = comm.author
    ulCommentaries.append(list_2);
    root.append(ulCommentaries);
  })
}

export const renderCats = () => {
  const root = document.getElementById("root");
  const ulCats = document.createElement("ul");
  initialState.categories.forEach((cats) => {
    const list_1 = document.createElement("li");
    list_1.textContent = cats.category;
    ulCats.append(list_1);
    root.append(ulCats);
  });
};
