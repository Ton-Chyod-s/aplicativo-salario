
const salario =  fetch('https://api-salario.cyclic.app/salario/2650').then((res) => res.json().then((data) => {
    console.log(data)
}))
salario