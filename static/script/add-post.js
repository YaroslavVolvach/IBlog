async function newFormHandler(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value.trim();

    console.log(postContent);

    const response = await fetch(`/posts`, {
        method: 'POST',
        body: JSON.stringify({title, postContent}),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);