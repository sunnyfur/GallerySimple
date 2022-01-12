let galleryImgs = document.getElementsByClassName('gallery__img');
let numActive = 0;
galleryImgs[numActive].style.display = 'inherit';


let galleryR = () => {
    if (numActive < galleryImgs.length - 1) {
        galleryImgs[numActive].style.display = 'none';
        galleryImgs[++numActive].style.display = 'inherit';
    }
}

let galleryL = () => {
    if (numActive > 0) {
        galleryImgs[numActive].style.display = 'none';
        galleryImgs[--numActive].style.display = 'inherit';
    }
}