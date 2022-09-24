const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const inputvalue = document.getElementById("search-bar")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
function getData() {
    fetch('https://newsapi.org/v2/everything?q= ' + inputvalue.value + ' &from=2022-08-24&sortBy=publishedAt&apiKey=c290fe19c35c47ada391c2cbce5ec3e1')
        .then(res => res.json())
        .then((data) => {

            let articles = data.articles
            console.log(articles)
            let i = 0
            for (i = 0; i < articles.length; i++) {
                let leftBox = document.getElementById("leftBox");
                let urlToImage = data.articles[i]["urlToImage"]
                let url =  data.articles[i]["url"]
                leftBox.innerHTML +=
                `  
                <div class="card">
                <img src="${urlToImage}" alt="" class="img">
                <div class="container2">
                  <h4><b>HEADLINES</b></h4>
                  <p>${data.articles[i]["title"]}</p>
                </div>
                <div class="time">PUBLISHED AT  ${data.articles[i]["publishedAt"]} </div>
                <a  class="anker"  href="${url}" target="_blank" >Read more here</a> 
       `
            }
        })
}
function  getData2(){
    fetch('https://newsapi.org/v2/everything?q=international&from=2022-08-24&sortBy=publishedAt&apiKey=c290fe19c35c47ada391c2cbce5ec3e1')
        .then(res => res.json())
        .then((data) => {

            let articles = data.articles
            let i = 0
            for (i = 0; i < articles.length; i++) {
                let rightBox = document.getElementById("rightBox");
                let urlToImage = data.articles[i]["urlToImage"]
                let url =  data.articles[i]["url"]
                rightBox.innerHTML +=
                `  
                <div class="card2">
                <img src="${urlToImage}" alt="" class="img">
                <div class="container2">
                <h4><b>HEADLINES</b></h4>
                  <p>${data.articles[i]["title"]}</p>
                </div>
                <div class="time">PUBLISHED AT  ${data.articles[i]["publishedAt"]} </div>
                <a  class="anker"  href="${url}" target="_blank" >Read more here</a> 
              </div>
`
            }
        })
}
document.getElementById("search-bar").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

document.getElementById("submit").onclick = function () {
    getData()
    getData2()
    inputvalue.value = ""
}

function headlines(){
    
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c290fe19c35c47ada391c2cbce5ec3e1')
    .then(res => res.json())
    .then((data) => {

        console.log(data)
        let articles = data.articles
        let i = 0
        for (i = 0; i < articles.length; i++) {
            let rightBox = document.getElementById("mydiv");
            let urlToImage = data.articles[i]["urlToImage"]
            let url =  data.articles[i]["url"]
            rightBox.innerHTML +=
                `  
                <div class="card3">
                <img src="${urlToImage}" alt="" class="img card3img">
                <div class="container2">
                <h4><b>HEADLINES</b></h4>
                  <p>${data.articles[i]["title"]}</p>
                </div>
                <div class="time">PUBLISHED AT  ${data.articles[i]["publishedAt"]} </div>
                <a  class="anker"  href="${url}" target="_blank" >Read more here</a> 
              </div>
`
  }
    })
}

function bbc() {
    fetch('https://newsapi.org/v2/everything?q=bbc&from=2022-08-24&sortBy=publishedAt&apiKey=c290fe19c35c47ada391c2cbce5ec3e1')
        .then(res => res.json())
        .then((data) => {

            let articles = data.articles
            console.log(articles)
            let i = 0
            for (i = 0; i < articles.length; i++) {
                let leftBox = document.getElementById("leftBox");
                leftBox.style.width = "100%"
                let urlToImage = data.articles[i]["urlToImage"]
                let url =  data.articles[i]["url"]
                leftBox.innerHTML +=
                `  
                <div class="card">
                <img src="${urlToImage}" alt="" class="img">
                <div class="container2">
                  <h4><b>HEADLINES</b></h4>
                  <p>${data.articles[i]["title"]}</p>
                </div>
                <div class="time">PUBLISHED AT  ${data.articles[i]["publishedAt"]} </div>
                <a  class="anker"  href="${url}" target="_blank" >Read more here</a> 
       `
            }
        })
}