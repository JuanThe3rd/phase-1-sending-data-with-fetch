// Add your code here
function submitData(name, email){
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch('http://localhost:3000/users', configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const body = document.querySelector('body');
            const newContent = document.createElement('h1');
            newContent.textContent = data.id;
            body.append(newContent);
        })
        .catch(function (error) {
            const body = document.querySelector('body');
            const newContent = document.createElement('h1');
            newContent.textContent = error.message;
            body.append(newContent);
        })
}