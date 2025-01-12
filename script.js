// script.js
const words = [
    {scrambled: "negi", word: "gine", description: "This is a machine used in textile industries, often to spin fibers.", img: "images/gine.jpg"},
    {scrambled: "plae", word: "apple", description: "This is a round fruit that comes in red, green, or yellow varieties, often eaten raw or used in desserts.", img: "images/apple.jpg"},
    {scrambled: "lepot", word: "petol", description: "This refers to a small village or rural settlement.", img: "images/petol.jpg"},
    {scrambled: "rboen", word: "bore", description: "A term used to describe a hole or tunnel, or when someone feels uninterested.", img: "images/bore.jpg"},
    {scrambled: "tcal", word: "cat", description: "This is a small domesticated animal, often kept as a pet, known for its independence and affection.", img: "images/cat.jpg"},
    {scrambled: "dcaer", word: "cedar", description: "A type of evergreen tree known for its aromatic wood, often used in building and furniture.", img: "images/cedar.jpg"},
    {scrambled: "lebe", word: "bele", description: "A type of fabric used in various cultural and traditional clothing.", img: "images/bele.jpg"},
    {scrambled: "moon", word: "moon", description: "A celestial body that orbits Earth and is the brightest object in the night sky.", img: "images/moon.jpg"},
    {scrambled: "tepo", word: "pote", description: "A container used for cooking or storing liquids, usually made of clay or metal.", img: "images/pote.jpg"},
    {scrambled: "dog", word: "god", description: "A term used to describe a deity or higher power in many cultures.", img: "images/god.jpg"},
    {scrambled: "cat", word: "cat", description: "A popular domesticated animal known for being playful, curious, and independent.", img: "images/cat.jpg"},
    {scrambled: "balm", word: "balm", description: "A soothing ointment used to relieve pain or irritation, often applied to the skin.", img: "images/balm.jpg"},
    {scrambled: "seap", word: "seap", description: "A type of seaweed that is harvested for food or medicinal purposes.", img: "images/seap.jpg"},
    {scrambled: "almond", word: "almod", description: "An edible seed from a tree, commonly used in cooking and as a snack.", img: "images/almod.jpg"},
    {scrambled: "bear", word: "bear", description: "A large, powerful mammal found in forests, known for its strength and fur.", img: "images/bear.jpg"},
    {scrambled: "tree", word: "tree", description: "A tall plant with a trunk that supports branches and leaves, vital for life on Earth.", img: "images/tree.jpg"},
    {scrambled: "wind", word: "wind", description: "Moving air that circulates around Earth, often influencing weather patterns.", img: "images/wind.jpg"},
    {scrambled: "eagle", word: "eagle", description: "A powerful bird of prey known for its sharp vision and strength.", img: "images/eagle.jpg"},
    {scrambled: "fish", word: "fish", description: "An aquatic animal with fins and gills, found in oceans, rivers, and lakes.", img: "images/fish.jpg"},
    {scrambled: "boat", word: "boat", description: "A small watercraft used for traveling across water, typically powered by oars or motors.", img: "images/boat.jpg"},
];

let currentWordIndex = 0;
let currentWord = words[currentWordIndex];

function displayDescription() {
    document.getElementById('description').innerText = currentWord.description;
    document.getElementById('word-container').innerText = currentWord.scrambled;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const message = document.getElementById('message');
    if (answer === currentWord.word) {
        message.style.color = "#28a745";
        message.innerText = "Correct! Well done!";
        showImage();
    } else {
        message.style.color = "#e74c3c";
        message.innerText = "Try again!";
    }
}

function showImage() {
    const imageContainer = document.getElementById('images-container');
    const img = document.createElement('img');
    img.src = currentWord.img;
    img.classList.add('show');
    imageContainer.appendChild(img);
    
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        currentWord = words[currentWordIndex];
        displayDescription();
    }
}

displayDescription();