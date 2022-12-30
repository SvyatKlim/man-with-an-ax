import gallery from './components/gallery';
import testimonials from "./components/testimonials";

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        document.querySelector('.loader').classList.add('loaded')
        setTimeout(function () {
            document.querySelector('.loader').classList.add('hidden')
        }, 600)
    }, 1000)

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
    gallery();
    testimonials();
});