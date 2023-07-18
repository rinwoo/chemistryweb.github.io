User
function toggleChapterMenu() {
    var chapterMenu = document.getElementById("menu");
    if (chapterMenu.style.display === "none") {
        chapterMenu.style.display = "block";
    } else {
        chapterMenu.style.display = "none";
    }
}

const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = '#' + randomColor;
}); 