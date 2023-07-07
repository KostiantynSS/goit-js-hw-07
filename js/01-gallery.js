import { galleryItems } from "./gallery-items.js";

// Change code below this line

const refs = {
    galleryList: document.querySelector(".gallery"),
};

refs.galleryList.addEventListener("click", showOriginalImage);

const galleryListImages = galleryItems.map((image, index) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    li.innerHTML = `<a class="gallery__link" href="${image.original}"><img class='gallery__image' data-index='${index}' data-source='${image.original}'src='${image.preview}' alt='${image.description}'/> </a>`;
    return li;
});

refs.galleryList.append(...galleryListImages);

function showOriginalImage(event) {
    if (event.target.tagName === "IMG") {
        const imageIndex = event.target.dataset.index;
        console.log(imageIndex);
        const instance = basicLightbox.create(
            `<img src='${galleryItems[imageIndex].original}' alt='${galleryItems[imageIndex].description}' >`
        );

        instance.show();
    }
}
// //  <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
