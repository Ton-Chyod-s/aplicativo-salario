
const salario =  (value) => {
    fetch(`https://api-salario.cyclic.app/salario/${value}`).then((res) => res.json().then((data) => {
        console.log(data)
    }))
}

const modSalario = (value) => {
    fetch(`https://api-salario.cyclic.app/salario/${value}`).then((res) => res.json().then((data) => {
        console.log(data)
    }))
}

salario(6650)
