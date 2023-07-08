import { galleryItems } from "./gallery-items.js";

const refs = {
    galleryList: document.querySelector(".gallery"),
};
refs.galleryList.addEventListener("click", showImage);

const galleryListImages = galleryItems.map((image) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    li.innerHTML = `<a class="gallery__link" href="${image.original}">
    <img class='gallery__image'  src='${image.preview}' alt='${image.description}' /> </a>`;

    return li;
});

refs.galleryList.append(...galleryListImages);
function showImage(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        const gallery = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
        });
        return refs.galleryList.removeEventListener("click", showImage);
    }
}
