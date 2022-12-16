
const cekSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error('Data harus number'))
            } else {
                resolve(a + b)
            }
        }, 3000)
    })
}

cekSum(1, 2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    }
    )


