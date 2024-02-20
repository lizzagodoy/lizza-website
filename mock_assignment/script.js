document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

    blogPost.addEventListener('submit', function(e) {
        // prevent the default form submission 
        e.preventDefault();

        // obtain values from form 
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;

        // create blank elements for new post 
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const authorPost = document.createElement('p');
        const contentPost = document.createElement('p');
        const currentTime = new Date().toISOString().slice(0,10);

        // set content to each 
        h2.textContent = title;
        authorPost.innerHTML = `Posted on <time datetime="${currentTime}">${currentTime}</time> by ${author}`;
        contentPost.textContent = content;

        // append new elements to the article 
        article.appendChild(h2);
        article.appendChild(authorPost);
        article.appendChild(contentPost);

        // append the new article to the website section for blogPosts 
        document.getElementById('blogPosts').appendChild(article);

        // clear the form fields
        blogForm.reset();


    })
    
})