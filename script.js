// const axios = require('axios');

// axios.get('https://codeforces.com/api/problemset.problems').then((response) => {
//     console.log(response.data);
//     const ele = document.getElementById('greet');
//     ele.innerHTML = response.data.result.problems[0].name.text;
// })

fetch('https://codeforces.com/api/problemset.problems')
    .then(data => data.json())
    .then(problemData => {
        console.log(problemData);
        const problemText = problemData.result.problems[0].name;
        const problemElement = document.getElementById('greet');

        problemElement.innerHTML = problemText;
    })