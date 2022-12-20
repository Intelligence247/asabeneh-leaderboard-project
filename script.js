let p = document.querySelector('p')

const xx = new Date()
let funchour = () => {
    let hh = xx.getHours()
    if (hh > 9) {
        return hh
    } else {
        return '0' + hh
    }
}

let funcmin = () => {
    let mm = xx.getMinutes()
    if (mm > 9) {
        return mm
    } else {
        return '0' + mm
    }
}


let month = xx.toLocaleDateString('month', { month: 'long' }).substr(0, 3).toUpperCase()
let dateInfo = `${month} ${xx.getDate()},${xx.getFullYear()} ${funchour()}:${funcmin()}`

let add = document.querySelector('#add')
let firstname = document.querySelector('#firstname')
let lastname = document.querySelector('#lastname')
let country = document.querySelector('#country')
let score = document.querySelector('#score')
let scriptcontents = document.querySelector('#scriptcontents')





add.addEventListener('click', (e) => {
    let obj = [
        // { fname: firstname.value, lname: 'YOHANES', country: 'FINLAND', score: 85, delete: './media/del.png', plus: '+5', minus: '-5', date: dateInfo },
        {
            fname: firstname.value,
            lname: lastname.value,
            country: country.value,
            score: score.value,
            delete: './media/del.png',
            plus: '+5', minus: '-5',
            date: dateInfo,


        }
    ]
    for (const c of obj) {
        let section = document.createElement('section')
        let divleft = document.createElement('div')
        let name = document.createElement('p')
        let date = document.createElement('p')
        divleft.appendChild(name)
        divleft.appendChild(date)
        section.appendChild(divleft)
        let fname = document.createElement('p')
        let lname = document.createElement('p')
        name.appendChild(fname)
        name.appendChild(lname)
        fname.textContent = c.fname
        lname.textContent = c.lname
        name.style.display = 'flex'
        name.style.gap = '0.5rem'

        // date
        date.textContent = c.date
        date.style.fontSize = '0.7rem'
        date.style.marginTop = '5px'
        date.style.color = 'rgba(0,0,0,0.5)'


        let country = document.createElement('p')
        country.textContent = c.country
        section.appendChild(country)

        let score = document.createElement('p')
        score.textContent = c.score
        section.appendChild(score)


        let divright = document.createElement('div')
        let forimg = document.createElement('p')
        let delImg = document.createElement('img')
        delImg.src = c.delete
        forimg.appendChild(delImg)
        // delImg
        delImg.style.width = '1rem'
        delImg.style.height = '1rem'
        forimg.style.background = 'white'
        forimg.style.width = '2rem'
        forimg.style.height = '2rem'
        forimg.style.display = 'flex'
        forimg.style.justifyContent = 'center'
        forimg.style.alignItems = 'center'
        forimg.style.borderRadius = '50%'



        let plus = document.createElement('p')
        let minus = document.createElement('p')
        divright.appendChild(forimg)
        divright.appendChild(plus)
        divright.appendChild(minus)
        plus.textContent = c.plus
        minus.textContent = c.minus
        section.appendChild(divright)

        // divright
        divright.style.display = 'flex'
        divright.style.gap = '1rem'

        // plus
        plus.style.background = 'white'
        plus.style.width = '2rem'
        plus.style.height = '2rem'
        plus.style.display = 'flex'
        plus.style.justifyContent = 'center'
        plus.style.alignItems = 'center'
        plus.style.borderRadius = '50%'
        plus.style.fontSize = '0.7rem'

        // minus
        minus.style.background = 'white'
        minus.style.width = '2rem'
        minus.style.height = '2rem'
        minus.style.display = 'flex'
        minus.style.justifyContent = 'center'
        minus.style.alignItems = 'center'
        minus.style.borderRadius = '50%'
        minus.style.fontSize = '0.7rem'


        // section
        section.style.height = '3rem'
        section.style.width = '44rem'
        section.style.backgroundColor = '#e5c9c5'
        section.style.marginBottom = '1rem'
        section.style.display = 'flex'
        section.style.justifyContent = 'space-between'
        section.style.alignItems = 'center'
        section.style.padding = '0.2rem 3rem 0.2rem 1rem'
        scriptcontents.appendChild(section)


        forimg.addEventListener('click', () => {
            section.style.display = 'none'
        })
        plus.addEventListener('click', () => {
            score.textContent = parseInt(c.score) + 5
        })
        minus.addEventListener('click', () => {
            score.textContent = parseInt(c.score) - 5
        })

    }
})