console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newPost = document.createElement("article");
newPost.classList.add("post");

const postParagraph = document.createElement("p");
postParagraph.textContent = "lorem ipsum";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";

const nextlikeButton = document.createElement("button");
nextlikeButton.classList.add("post__button");
nextlikeButton.setAttribute("data-js", "like-button");
nextlikeButton.textContent = "♥ Like";
nextlikeButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPost);
newPost.append(postParagraph);
newPost.append(footer);
footer.append(span);
footer.append(nextlikeButton);

// Exercise:
// Use document.createElement() and
// append another social media post to the body.

/* This page shows an example of a social media post. 
Your task is to replicate the social media post with JavaScript. 
Use `document.createElement()` to generate all HTML elements 
separately.

Don't use `.innerHTML` to create the HTML in one instance, 
but use multiple calls of `document.createElement()` instead.

The `index.html` demonstrates the required HTML tags, 
structure and class names.

Append the second social media post to the body. 
Don't forget to add the event listener to the like button. 
You can use the function `handleLikeButtonClick` for the 
event listener.*/
