const cards = document.querySelectorAll("card");
for (const card of cards) {
    card.classList.add("project-card");
    const contentCard = card.innerHTML
    card.innerHTML = ""
    const image = card.attributes.img?.value;

    if (image) {
        const elementImage = document.createElement('img');
        elementImage.classList.add("image-jeniffer");
        elementImage.setAttribute("src", image);
        card.appendChild(elementImage);
    }
    
    const title = card.attributes.title.value;
    const elementTitle = document.createElement('h2');
    elementTitle.innerText = title;
    card.appendChild(elementTitle);

    const elementContent = document.createElement('div')
    elementContent.innerHTML = contentCard;
    card.appendChild(elementContent);
}

