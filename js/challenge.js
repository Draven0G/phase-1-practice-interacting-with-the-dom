document.addEventListener("DOMContentLoaded", function() {
    const counterDisplay = document.getElementById("counter");
    const plusBtn = document.getElementById("plusBtn");
    const minusBtn = document.getElementById("minusBtn");
    const likeBtn = document.getElementById("likeBtn");
    const likeList = document.getElementById("likeList");
    const commentInput = document.getElementById("commentInput");
    const commentBtn = document.getElementById("commentBtn");
    const commentList = document.getElementById("commentList");

    let counter = 0;
    let timer = setInterval(incrementCounter, 1000);

    function incrementCounter() {
        counter++;
        counterDisplay.textContent = counter;
    }

    function decrementCounter() {
        counter--;
        counterDisplay.textContent = counter;
    }

    plusBtn.addEventListener("click", incrementCounter);
    minusBtn.addEventListener("click", decrementCounter);

    likeBtn.addEventListener("click", function() {
        const li = document.createElement("li");
        li.textContent = `Liked ${counter} times`;
        likeList.appendChild(li);
    });

    commentBtn.addEventListener("click", function() {
        const comment = commentInput.value;
        if (comment.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = comment;
            commentList.appendChild(li);
            commentInput.value = "";
        }
    });
});
