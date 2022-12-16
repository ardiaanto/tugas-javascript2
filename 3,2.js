

function sortArray(array) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (array.length === 0) {
                reject(new Error('Array kosong'))
            } else {
                array.sort((a, b) => a - b)
                resolve(array)
            }
        }, 3000)
    }
    )
}


sortArray([5, 2, 11, 4, 3, 6, 7, 8, 1, 9, 10])
    .then((result) => {
        // print sorted array with for loop
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    })
    .catch((error) => {
        console.log(error)
    }
    )


