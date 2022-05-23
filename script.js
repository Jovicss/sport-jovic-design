let sliderRandom
const sliderTxt = document.getElementById("alert-text-el")
const sliderDescTxt = document.getElementById("description-el")
const sliderReadMoreBtn = document.getElementById("read-more-btn")
const leftArrowBtn = document.getElementById("left-slider-btn")
const rightArrowBtn = document.getElementById("right-slider-btn")
const slideListMain = {
    name: "<h1 id ='alert-text-el'> BEST <br> FITNESS <br> EQUIPMENTS </h1>",
    desc: "Chunks as necessary, making this the first true generator on the internet. It uses a dictionary\n" +
        "of over 200 Latin words, combined with",
    btn: "READ MORE..."
}
const slideListOne = {
    name: "<h1 id='alert-text-el'>BEST <br> TRAINING <br> EQUIPMENTS </h1>",
    desc: "Example one Chunks as necessary, making this the first nacukam true generator on the internet. It uses a dictionary\n" +
        "of over 200 Latin words, combined with",
    btn: "...READ MORE"
}
const slideListTwo = {
    name: "<h1 id='alert-text-el'>THE BEST <br> TRAINING <br> EXPIRIENCE </h1>",
    desc: "Example two as necessary, making this the first true napukam generator on the internet. It uses a dictionary\n" +
        "of over 200 Latin words, combined with too many words",
    btn: "READ MORE"
}

function sliderSwitcher() {
    sliderRandom = Math.floor( Math.random() * 3) + 1
}

rightArrowBtn.addEventListener('click', function () {
    sliderSwitcher()
    if (sliderRandom === 1) {
        sliderTxt.innerHTML = slideListOne.name
        sliderDescTxt.textContent = slideListOne.desc
        sliderReadMoreBtn.textContent = slideListOne.btn
    } else if (sliderRandom === 2) {
        sliderTxt.innerHTML = slideListTwo.name
        sliderDescTxt.textContent = slideListTwo.desc
        sliderReadMoreBtn.textContent = slideListTwo.btn
    } else if (sliderRandom === 3) {
        sliderTxt.innerHTML = slideListMain.name
        sliderDescTxt.textContent = slideListMain.desc
        sliderReadMoreBtn.textContent = slideListMain.btn
    }
})

leftArrowBtn.addEventListener('click', function () {
    sliderSwitcher()
    if (sliderRandom === 1) {
        sliderTxt.innerHTML = slideListMain.name
        sliderDescTxt.textContent = slideListMain.desc
    } else if (sliderRandom === 2) {
        sliderTxt.innerHTML = slideListOne.name
        sliderDescTxt.textContent = slideListOne.desc
    } else if (sliderRandom === 3) {
        sliderTxt.innerHTML = slideListTwo.name
        sliderDescTxt.textContent = slideListTwo.desc
    }
})



const inputElement = document.getElementById("input-el")
const subBtn = document.getElementById("subscribe-el")
let subscribers = []

subBtn.addEventListener('click', function () {
    subscribers.push(inputElement.value)
    console.log(subscribers)
    inputElement.value = ""
    localStorage.setItem("webSubs", JSON.stringify(subscribers))
    alert("Thank you for Subscribe, We will contact you via mail which you added")
})


const reviewFirst = document.getElementById("first_review-el")
const reviewSecond = document.getElementById("second_review-el")
const reviewThird = document.getElementById("third_review-el")
const reviewText = document.getElementById("review_text-el")
const reviewImg = document.getElementById("img-el")
const reviewName = document.getElementById("name-el")
const reviewJob = document.getElementById("job-el")
const reviewOne = {
    review: "'' There are many variations of passages dasd of Lorem Ipsum available,but the majority have suffered alteration in The point of using Lorem Ipsum is that it has a Testiram more-or-less normal distribution of letters, the Internet tend to repeat predefined chunks as necessary ''",
    image: "<img src='images/client.png' alt='' id='img-el'>",
    client: "Clara Rhoades",
    jobs: "Customer"
}
const reviewTwo = {
    review: "'' Slider testing second button of Lorem Ipsum available,but the majority have suffered alteration in The point of using Lorem Ipsum is that it has a Testiram more-or-less normal distribution of letters, the Internet tend to repeat predefined chunks as necessary ''",
    image: `<img src='images/client1.png' alt='' id='img-el'>`,
    client: "Adriana Rozgov",
    jobs: "Partner"
}
const reviewThree = {
    review: "'' Slider testing three button of Lorem Ipsum available,but the majority have suffered alteration in The point of using Lorem Ipsum is that it has a Testiram more-or-less normal distribution of letters, the Internet tend to repeat predefined chunks as necessary ''",
    image: "<img src='images/client2.png' alt='' id='img-el'>",
    client: "Angela de Borzog",
    jobs: "Senior Member"
}


reviewFirst.addEventListener('click', function () {
    reviewText.textContent = reviewOne.review
    reviewImg.innerHTML = reviewOne.image
    reviewName.textContent = reviewOne.client
    reviewJob.textContent = reviewOne.jobs
})

reviewSecond.addEventListener('click', function () {
    reviewText.textContent = reviewTwo.review
    reviewImg.innerHTML = reviewTwo.image
    reviewName.textContent = reviewTwo.client
    reviewJob.textContent = reviewTwo.jobs
})

reviewThird.addEventListener('click', function () {
    reviewText.textContent = reviewThree.review
    reviewImg.innerHTML = reviewThree.image
    reviewName.textContent = reviewThree.client
    reviewJob.textContent = reviewThree.jobs
})



