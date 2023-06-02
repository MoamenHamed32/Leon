let navBtn = document.querySelector(".navigation");
let linksList = document.getElementById("links-list");
let parent = document.getElementById("parent");

navBtn.onclick = () => {
  linksList.style.display === "none"
    ? (linksList.style.display = "block")
    : (linksList.style.display = "none");
};
