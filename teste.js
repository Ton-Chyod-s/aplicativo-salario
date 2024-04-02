
const salario =  (value) => {
    const result = fetch(`https://api-salario.cyclic.app/salario/${value}`).then((res) => res.json().then((data) => {
        console.log(data)
        return data
    }))
    return result
}

const modSalario = (value) => {
    const result = fetch(`https://api-salario.cyclic.app/salario/${value}`).then((res) => res.json().then((data) => {
        console.log(data)
        return data
    }))
    return result
}

salario(2650)
