fetch('jumbo.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        for (var i = 0; i < 3; i++) {
            document.getElementById("jumbotron").innerHTML +=
                `<div class="card ${data[i].class}">
                <div class="card-left">
                <h1 class="jumbo-title">${data[i].head}</h1>
                <h3 class="jumbo-desc">${data[i].desc}</h3>
                </div>
                <img class="jumbo-img" src="${data[i].imgURL}">
                <video class="jumbo-video" autoplay playsinline muted loop>
                <source src="${data[i].videoURL}" type="${data[i].type}">
                </video>
                </div>`
        }
    })


fetch('faqs.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        for (var i = 0; i < 6; i++) {
            if (data[i].ans2 == "") {
                document.getElementById("faqs").innerHTML +=
                    `<div class="question-cont">
                <button class="question" onclick="something('${i}')">
                <span>${data[i].ques}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg" id="${i}" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg></span>
                </button>
                </div>
                <div class="answer ${i}">
                <p class="ans1">${data[i].ans}</p>
                <p class="notans">${data[i].ans2}</p>
                </div>`
            } else {
                document.getElementById("faqs").innerHTML +=
                    `<div class="question-cont">
                <button class="question" onclick="something('${i}')">
                <span>${data[i].ques}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg" id="${i}" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg></span>
                </button>
                </div>
                <div class="answer ${i}">
                <p class="ans1">${data[i].ans}</p>
                <p class="ans2">${data[i].ans2}</p>
                </div>
                `
            }
        }
    })

const something = (idx) => {
    var already = document.getElementsByClassName("active")
    var selecticon = document.getElementsByClassName("bi-active")
    if (already.length == 1) {
        for (var i = 0; i < already.length; i++) {
            console.log(already)
            already[i].classList.toggle("active")
            selecticon[0].classList.toggle("bi-active")
        }

        var ans = document.getElementsByClassName(idx)
        var icon = document.getElementById(idx)
        console.log(ans)
        ans[0].classList.toggle("active")
        icon.classList.toggle("bi-active")
    } else {
        var ans = document.getElementsByClassName(idx)
        var icon = document.getElementById(idx)
        ans[0].classList.toggle("active")
        icon.classList.toggle("bi-active")
    }
}