/* 
.div15 { grid-area: 5 / 1 / 6 / 2; } monday
.div16 { grid-area: 3 / 2 / 4 / 3; } tuesday
.div17 { grid-area: 1 / 3 / 2 / 4; } wednesday
.div18 { grid-area: 3 / 4 / 4 / 5; } thursday
.div19 { grid-area: 4 / 5 / 5 / 6; } friday
.div20 { grid-area: 2 / 6 / 3 / 7; } saturday
.div21 { grid-area: 4 / 7 / 5 / 8; } sunday
*/

const graph = document.querySelector('.graph')

const mon = document.getElementById('0')
const tue = document.getElementById('1')
const wed = document.getElementById('2')
const thu = document.getElementById('3')
const fry = document.getElementById('4')
const sat = document.getElementById('5')
const sun = document.getElementById('6')
const dayArr = [mon,tue,wed,thu,fry,sat,sun]

fetch('./data.json')
.then((res) => res.json())
.then((data) => getData(data))
let getData = data => {
    dayArr.forEach(d => {
        d.addEventListener('click', e => {
            removeSpend()
            createSpend(data,d.id)
        })
    })
}

let createSpend = (data,id) => {
    let divP = document.createElement('div')
    let idn = parseInt(id,10)
    divP.classList.add(`div${idn+15}`)
    divP.classList.add(`day`)
    divP.innerHTML = "$" + data[id].amount
    graph.appendChild(divP)
}

let removeSpend = () => {
    let sp = document.querySelector('.day')
    if (sp !== null) {
        sp.remove()
    }
}