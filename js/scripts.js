//Модальное окно
let modal = document.getElementById('myModal');

let btn = document.getElementById('myBtn')


let close = document.getElementById('close')

btn.onclick = function () {
    modal.style.display = "block";
}


close.onclick = function () {
    modal.style.display = "none";
}


//открывающийся список навигации
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//Burger
let burgerMenu = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger-close')
let menu = document.querySelector('.menu');

burgerMenu.onclick = function () {
    menu.classList.add('overlay');
}
burgerClose.onclick = function () {
    menu.classList.remove('overlay');
}




//quiz
const quizArray = [
    {
        step: 1,
        title: 'Какие виды тестов вам нравятся?',
        description: 'Многие из нас хоть раз попадались на эту удочку — хочешь пройти всего один тест из интернета, и вдруг понимаешь, что пролетело полдня.',
        type: 'checkbox',
        questions: [
            {
                id: 0,
                checked: false,
                title: 'На темперамент',
            },
            {
                id: 1,
                checked: false,
                title: 'Кто я из вселенной Марвел',
            },
            {   id: 2,
                checked: false,
                title: 'Увидел это',
            },
            {
                id: 3,
                checked: false,
                title: 'Мое тотемное животное',
            },
            {   
                id: 4,
                checked: false,
                title: 'На IQ',
            },
            {
                id: 5,
                checked: false,
                title: 'На словарный запас',
            },
            {
                id: 6,
                checked: false,
                title: 'На логическое мышление',
            },
            {
                id: 7,
                checked: false,
                title: 'На уровень интеллектат',
            }
        ]
    },
    {
        step: 2,
        title: 'Вы любите проходить тесты',
        description: 'Нам важно узнать насолько часто Вы проходите тесты.',
        type: 'radio',
        questions: [
            {
                id: 8,
                checked: false,
                title: 'Нет, я не никогда не прохожу тесты',
            },
            {
                id: 9,
                checked: false,
                title: 'Да, я прохожу все тесты',
            },
            {
                id: 10,
                checked: false,
                title: 'Заставляю себя проходить тесты',
            },
            {
                id: 11,
                checked: false,
                title: 'Не люблю проходить тесты, но иногда приходится',
            }
        ]
    },
    {
        step: 3,
        title: 'Спасибо за ответы! Заполните форму ниже',
        description: 'Ваше мнение важно для нас. Прикрепите фото с Вашей любимой картинкой и оставьте комментарий насколько понравился Вам тест.',
        type: 'select',
        questions: [
            {
                id: 12,
                checked: true,
                title: 'Нет, я не никогда не прохожу тесты',
            },
            {
                id: 13,
                checked: false,
                title: 'Да, я прохожу все тесты',
            },
            {
                id: 14,
                checked: false,
                title: 'Заставляю себя проходить тесты',
            },
            {
                id: 15,
                checked: false,
                title: 'Не люблю проходить тесты, но иногда приходится',
            }
        ]
    }

]

const quiz = document.querySelector('.quiz');

const renderCurrentStep = (step) => { 
    if(step > 3) quiz.innerHTML = `<div><h2>Спасибо за участие</h2></div>`

    const current = quizArray.find(quiz => quiz.step === step);

    function renderAnswer(data) {
        return data.questions.reduce((acc, value, index, arr) => {
            if (data.type === 'checkbox') {
                return `${acc} <label class="check"><input type="checkbox" class="answer-check" data-id="${value.id}" ${value.checked ? 'checked' : ''}>${value.title}</label>`
            }

            if (data.type === 'radio') {
                return `${acc} <label class="check"><input type="radio" class="answer-check" data-id="${value.id}" name="group-1" ${value.checked ? 'checked' : ''}>${value.title}</label>`
            }

            if (data.type === 'select') {
                if(index === 0) acc += `<select class="answer-select">`
                if(index === arr.length - 1) {
                    return `${acc} <option class="quiz-option" data-id="${value.id}" ${value.checked ? 'selected' : ''}>${value.title}</option></select>`
                }
                return `${acc} <option class="quiz-option" data-id="${value.id}" ${value.checked ? 'selected' : ''}>${value.title}</option>`
            }
        }, '');
    }

    function renderAside(step) {
        let asideElement = '';

        function renderAsideAnswer(i) {
            return quizArray[i].questions.reduce((acc, value) => {
                if(!value.checked) {
                    return `${acc}`
                }
                return `${acc} <h5>${value.title}</h5>`
            }, '')
        }
        for(let i = 0; i < step; i++) {
            asideElement += 
            `
                <aside>
                    <h3>${quizArray[i].title}</h3>
                    ${renderAsideAnswer(i)}
                </aside>               
            `
        }
        return asideElement;
    }

    let htmlElements =
        `
            <div>
                ${renderAside(step)}
            </div>
            <div class="quiz-questions">
                <h2>${current.title}</h2>
                <h4>${current.description}</h4>
                <div class="quiz__questions__checkboxes">
                    ${renderAnswer(current)}
                </div>

       
                <button class="prev-step">Назад</button>
                <button class="next-step">Продожить</button>

            </div>
        `;

    quiz.innerHTML = htmlElements

    let nextStep = document.querySelector('.next-step');
    nextStep.onclick = () => {
        quiz.innerHTML = ''
        renderCurrentStep(++step)

    }
    let prevStep = document.querySelector('.prev-step');
    prevStep.onclick = () => {
        quiz.innerHTML = ''
        renderCurrentStep(--step)
    }

    let allAnswer = document.querySelectorAll('.answer-check');
    allAnswer.forEach((ans) => {
        ans.addEventListener('change', (event) => {
            current.questions.forEach((quest) => {
                if(quest.id === Number(event.target.dataset.id)) {
                    if(current.type === 'checkbox') quest.checked = !quest.checked
                    if(current.type === 'radio') {
                        current.questions.forEach((quest) => quest.checked = false)
                        quest.checked = !quest.checked
                    }
                }
            })
            renderCurrentStep(step)
        })
    })

    if(document.querySelector('.answer-select')) { // for select
        let allAnswerSelect = document.querySelector('.answer-select');
        allAnswerSelect.addEventListener('change', (event) => {
            for(let i = 0; i < allAnswerSelect.options.length; i++) {
                let option = allAnswerSelect.options[i];
                current.questions.forEach((quest) => {
                    if(quest.id === Number(option.getAttribute('data-id')) && option.selected) {
                        current.questions.forEach((quest) => quest.checked = false)
                        quest.checked = true
                    }
                })
            }
            renderCurrentStep(step)
        })
    }    
}
renderCurrentStep(1)







