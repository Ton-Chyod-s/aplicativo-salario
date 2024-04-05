
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


const resSalario =  async (value) => {
    let data = []
    const result = await fetch(`https://api-salario.cyclic.app/salario/${value}`)
    const responseData = await result.json()
    data = responseData?.results
    return data
}

console.log(resSalario(2640))