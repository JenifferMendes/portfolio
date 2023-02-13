const cards = document.querySelectorAll("card");
for (const card of cards) {
    card.classList.add("card");
    const contentCard = card.innerHTML
    card.innerHTML = ""
    const image = card.attributes.img?.value;

    if (image) {
        const elementImage = document.createElement('img');
        elementImage.classList.add("image-card");
        elementImage.setAttribute("src", image);
        const containerImage = document.createElement('div');
        containerImage.classList.add("container-image")
        containerImage.appendChild(elementImage)
        card.appendChild(containerImage);
    }

    const containerAllContent = document.createElement("div")
    containerAllContent.classList.add("container")
    
    const title = card.attributes.title.value;
    const elementTitle = document.createElement('h2');
    elementTitle.innerText = title;
    elementTitle.classList.add("title-card");
    containerAllContent.appendChild(elementTitle);

    const elementContent = document.createElement('div')
    elementContent.classList.add("content")
    elementContent.innerHTML = contentCard;

    containerAllContent.appendChild(elementContent);

    card.appendChild(containerAllContent);
}

