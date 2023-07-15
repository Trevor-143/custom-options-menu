const optionsMenu = document.querySelector('.select-menu')
const selectBtn = optionsMenu.querySelector('.select-btn')
const options = optionsMenu.querySelectorAll('.option')
const sBtn_text = optionsMenu.querySelector('.sBtn-text')

selectBtn.addEventListener('click', () => {
    optionsMenu.classList.toggle('active')
})

options.forEach((option) => {
    option.addEventListener('click', () => {
        let clickedOption = option.querySelector('.option-text').innerText
        sBtn_text.innerText = clickedOption
        console.log(clickedOption)
    })
})