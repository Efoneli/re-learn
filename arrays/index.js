// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//         name: 'First Name',
//         email: 'efonelisarah@gmail.com',
//         password: '12345'
//     })
// })
// .then(res=> {
//     return res.json()
// }) .then(data => console.log(data))
// .catch(error => console.log(error))




//  fetch('https://api.api-ninjas.com/v1/cats?name=')
// .then(res => {
//     return res.json()
// })
// .then(data => console.log(data))
//     // {
//     //     data.forEach(user => {
//     //         const markup = `<li>${user.name}</li>`;

//     //         document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     //     });
//     // })
// .catch(error => console.log(error));

var name = 'abyssinian'
ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});