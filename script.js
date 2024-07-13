let ErrorBox = document.querySelectorAll('.mid02 span')
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    if (event.target.uname.value == '') {
        ErrorBox[0].innerHTML = "Please Enter your Name"
    }
    if (event.target.uemail.value == '') {
        ErrorBox[1].innerHTML = "Please Enter your Email"
    }
    if (event.target.uphone.value == '') {
        ErrorBox[2].innerHTML = "Please Enter your Phone number"
    }
    if (event.target.uperson.value == '') {
        ErrorBox[3].innerHTML = "Please Enter Person Count"
    }
    event.preventDefault()
})

let quest = document.querySelectorAll('.faqQuest')
quest.forEach((item, index) => {
    item.addEventListener('click', () => {
        let CurrentAns = item.nextElementSibling
        let allAns = document.querySelectorAll('.FaqAns')
        for (let i = 0; i < allAns.length; i++) {
            if (allAns[i] != CurrentAns)
                allAns[i].classList.remove('active')
        }
        CurrentAns.classList.toggle('active')
    })
})

let arrow = document.querySelector('#arrows')
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        arrow.style.display = 'block'
    } else {
        arrow.style.display = "none"
    }
})