const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const navmobile = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    navmobile.classList.toggle("openDrawer");
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;
      })
      .catch(err => console.error('Error loading nav:', err));
  });
  