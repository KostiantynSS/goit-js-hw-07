import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
    galleryList: document.querySelector(".gallery"),
};

refs.galleryList.addEventListener("click", showOriginalImage);

const galleryListImages = galleryItems.map((image) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    li.innerHTML = `<a class="gallery__link" href="${image.original}">
    <img class='gallery__image' data-source='${image.original}' src='${image.preview}' alt='${image.description}'/> </a>`;
    return li;
});

refs.galleryList.append(...galleryListImages);

function showOriginalImage(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        const instance = basicLightbox.create(
            `<img src='${event.target.dataset.source}' alt='${event.target.alt}' >`,
            {
                onShow: (instance) => {
                    window.addEventListener("keydown", onEscapeKey);
                },
                onClose: (instance) => {
                    window.removeEventListener("keydown", onEscapeKey);
                },
            }
        );
        function onEscapeKey(event) {
            if (event.code === "Escape") {
                instance.close();
            }
        }
        instance.show();
    }
}
