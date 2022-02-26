const hidecard = (genre) => {
    var clicked = document.getElementById(genre)
    console.log(genre.classList)
    genre.classList.add("active")
}

const showseriescard = (genre, title) => {
    var clicked = document.getElementById(genre)
    if (clicked.classList.contains("active")) {
        clicked.classList.toggle("active")
    }

    fetch('series.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            switch (genre) {
                case "popular":
                    var mydata = data[0].popular
                    break;
                case "drama":
                    var mydata = data[1].drama
                    break;
                case "scifi":
                    var mydata = data[2].scifi
                    break;
                case "action":
                    var mydata = data[3].action
                    break;
                case "crime":
                    var mydata = data[4].crime
                    break;
                case "children":
                    var mydata = data[5].children
                    break;
            }
            var idx = 0
            for (var i = 0; i < 11; i++) {
                if (title == mydata[i].title) {
                    idx = i
                }
            }
            clicked.innerHTML =
                `<div class="card" style="background-image:  linear-gradient(to left, rgba(255,153,153,0) 0%,rgba(255,153,153,0) 75%,rgba(0, 0, 0, 1) 100%), url(${mydata[idx].image});">
                <div class="card-left">
                    <img src="${mydata[idx].image}" alt="">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-desc">${mydata[idx].desc}</p>
                    <button class="play card-btn" onclick="showPopup()">Play</button>
                    <div class="popup">
                    <div class="blocker" onclick="hidePopup()"></div>
                    <div class="contents">
                    <video controls >
                    <source src="Pip  A Short Animated Film by Southeastern Guide Dogs(0).mp4" type="video/mp4">
                    Your browser does not support HTML video.
                    </video>
                    </div>
                    </div>    
                    </div>
                    <div class="middle"></div>
                    <div class="card-right" >
                    <span class="cross"><i class="bi bi-x-circle" width="40" height="40" onclick="hidecard(${genre})"></i></span>
                    </div>
                    </div>`
        })
}

const showPopup = () => {
    const popup = document.querySelector('.popup');
    popup.classList.add('open');
    const bi = document.getElementsByClassName("bi")
    bi[0].style.display = "none"
}

const hidePopup = () => {
    const popup = document.querySelector('.popup');
    popup.classList.remove('open');
    const video = document.querySelector('video')
    video.pause()
    video.currentTime = 0;
    const bi = document.getElementsByClassName("bi")
    bi[0].style.display = "flex"
}