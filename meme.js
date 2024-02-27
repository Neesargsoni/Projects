const memebtn = document.querySelector(".meme-generator .meme-generator-btn");

const memeimg = document.querySelector(".meme-generator img");

const memetitle = document.querySelector(".meme-generator .meme-title");

const memeauthor = document.querySelector(".meme-generator .meme-author");


const updatedata = (url, title, author) => {
    memeimg.setAttribute("src", url)
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `Made by : ${author}`;
};

const generateMeme = () => {
    fetch(" https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then(data => {
            updatedata(data.url, data.title, data.author)
            console.log(data);
        })

};

memebtn.addEventListener("click", generateMeme);

// generateMeme();