
const salario =  async (value) => {
    const result = await fetch(`https://api-salario.cyclic.app/salario/${value}`)
    .then((res) => res.json()
    .then((data) => {
        console.log(data)
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

// salario(2640)


async function Imprimir(value){
    fetch(`https://api-salario.cyclic.app/salario/${value}`)
    .then(res => res.json())
    .then(data => {
        const val = valor
    })
}

Imprimir(2640)