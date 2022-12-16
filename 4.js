// const fetch = require('node-fetch');


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((result) => {
        result.map((item) => {
            console.log(item.name)
        })
    }
    )
    .catch((error) => {
        console.log(error)
    }
    )
