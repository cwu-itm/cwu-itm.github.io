document.addEventListener('DOMContentLoaded', function() {
    const postTitleInput = document.getElementById('post-title');
    const postContentInput = document.getElementById('post-content');
    const publishButton = document.getElementById('publish-button');
    const postsContainer = document.getElementById('posts');

    publishButton.addEventListener('click', function() {
        const title = postTitleInput.value;
        const content = postContentInput.value;

        if (title && content) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            postsContainer.appendChild(postDiv);

            // Clear input fields
            postTitleInput.value = '';
            postContentInput.value = '';
        } else {
            alert('Please enter both title and content.');
        }
    });
});