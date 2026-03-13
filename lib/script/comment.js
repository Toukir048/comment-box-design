    document.getElementById("post-btn").addEventListener('click', () => {
            // collect input comment text
            const commentInput = document.getElementById("comment-input");
            const commentText = commentInput.value;

            //create p tag with innerText
            const newComment = document.createElement('p');
            newComment.classList.add('comment');
            newComment.innerText = commentText;

            //append p tag to the comment display section
            const commentContainer = document.getElementById("comment-container");
            commentContainer.appendChild(newComment);

            //refresh the input filed
            commentInput.value = "";
        })