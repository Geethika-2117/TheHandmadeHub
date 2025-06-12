document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".comment-form form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const comment = document.getElementById("comment").value.trim();
        if (!name || !comment) return;

        const commentSection = document.querySelector(".comments-section");

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const date = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        commentDiv.innerHTML = `
            <div class="comment-meta" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span class="comment-author">${name}</span>
                    <span class="comment-date">${date}</span>
                </div>
                <i class="fas fa-trash delete-icon" title="Delete Comment" style="color: #e74c3c; cursor: pointer;"></i>
            </div>
            <p class="comment-content">${comment}</p>
        `;

        commentSection.insertBefore(commentDiv, document.querySelector(".comment-form"));

        // Reset form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";

        // Delete functionality
        const deleteIcon = commentDiv.querySelector(".delete-icon");
        deleteIcon.addEventListener("click", function () {
            commentDiv.remove();
        });
    });
});
