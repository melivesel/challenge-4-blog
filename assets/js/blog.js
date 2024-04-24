const postList = document.querySelector('#post-list');
const backButton =document.querySelector('#back');

let post = [];

function renderPosts() {
    postList.innerHTML = '';
    for (let i = 0; i < post.length; i++) {
        const postItem = post[i];
        
        const li = document.createElement('li');
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `Name: ${postItem.name}`;
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = `Title: ${postItem.title}`;
        
        const contentPara = document.createElement('p');
        contentPara.textContent = `Content: ${postItem.content}`;
        
        li.appendChild(nameSpan);
        li.appendChild(titleSpan);
        li.appendChild(contentPara);
        
        li.setAttribute('data-index', i);
        postList.appendChild(li);
    }
}

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
        post = storedPosts;
        console.log(storedPosts);
    }
    renderPosts();
    console.log(storedPosts);
}

document.addEventListener('DOMContentLoaded', init);

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    const blogDisplay = 'https://melivesel.github.io/challenge-4-blog/index.html';
    window.location.href = blogDisplay; 
});











