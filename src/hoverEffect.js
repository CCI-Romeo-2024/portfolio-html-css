function setHover(e, links) {
    links.forEach(link => {
        link.classList.remove('invert');
    });

    e.target.classList.add('invert');
}
function registerNewEffect(list) {
    list.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            setHover(e, list)
        }); // -> mouse hover
        link.addEventListener('touchstart', (e) => {
            setHover(e, list)
        }); // -> mobile touch
        link.addEventListener('focus', (e) => {
            setHover(e, list)
        }); // -> keyboard navigation
    });
}


const linksShortPres = document.getElementById("socials-short-presentation").querySelectorAll('li > a');
const skillsList = document.getElementById("languages").querySelectorAll('li > a');
const getInTouch = document.getElementById("socials-get-in-touch").querySelectorAll('a');

registerNewEffect(linksShortPres);
registerNewEffect(skillsList);
registerNewEffect(getInTouch);