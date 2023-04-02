const app1 = document.querySelector(".hause__shop #h_1")
const app2 = document.querySelector(".hause__shop #h_2")
const houses = document.querySelector(".houses")
const appartment = document.querySelector(".appartment")

app1.onclick = function () {
    houses.style.display = 'none'
    appartment.style.display = 'grid'
    app1.style.color = '#FF6633'
    app2.style.color = '#7D8FB3'
}
app2.onclick = function () {
    houses.style.display = 'grid'
    appartment.style.display = 'none'
    app1.style.color = '#7D8FB3'
    app2.style.color = '#FF6633'
}