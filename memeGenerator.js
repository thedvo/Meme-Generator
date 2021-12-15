// Accepts top text, bottom text, image URL & generates a meme. 
// Event Listener "submit", function collects inputs, creates new Div, inserts innerText top, bottom, with style, backGround image of the image URL. Append to bottom of the screen.

const form = document.querySelector('#formContainer');
const topInput = document.querySelector('#top-text');
const bottomInput = document.querySelector('#bottom-text');
const linkInput= document.querySelector('#link');
const results = document.querySelector('#results');

// submit event, calls function to generate meme and then it is appended to the page 
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newMeme = generateMeme(topInput.value, bottomInput.value, linkInput.value);
    
    results.appendChild(newMeme);
    form.reset();
});

// this function will collect the inputs and generate a new meme. This function is called when user clicks submit.
function generateMeme(top, bottom, link){
    const newDiv = document.createElement("div");
    const meme = document.createElement("img");
    const topText = document.createElement("p");
    const bottomText = document.createElement("p");
    const hover = document.createElement("div");
    const hoverText = document.createElement("div");
    
    newDiv.append(meme, topText, bottomText, hover);
    newDiv.classList.add("meme");
    
    meme.setAttribute("id", "img");
    meme.src = linkInput.value; 
 
    topText.setAttribute("id", "top");
    topText.classList.add("memeText");
    topText.innerText = topInput.value;

    bottomText.setAttribute("id", "bottom");
    bottomText.classList.add("memeText");
    bottomText.innerText = bottomInput.value;

    hover.appendChild(hoverText);
    hover.classList.add('overlay');
    // hoverText.classList.add('removeText');
    // hoverText.innertext = 'X';

    return newDiv;
};


// Deletes a meme if clicked.
results.addEventListener("dblclick", function(e) {
    e.target.parentElement.remove();
});

// Hover over a meme will generate an overlay representing a delete button.

