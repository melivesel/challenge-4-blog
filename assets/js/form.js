const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const msgDiv = document.querySelector('#msg');
const saveButton = document.querySelector('#save');

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

saveButton.addEventListener('click', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (name === '') {
        displayMessage('error', 'Username cannot be blank');
    } else if (title === '') {
        displayMessage('error', 'Please add a title');
    } else if (content === '') {
        displayMessage('error', 'Please add content');
    } else {
        const post = {
            name: name,
            title: title,
            content: content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        displayMessage('success', 'Post saved successfully');
        nameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
        
        const blogDisplay = 'blog.html';
        window.location.href = blogDisplay; 
    }
});

