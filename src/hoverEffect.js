function setHover(e, links) {
    links.forEach(link => {
        link.classList.remove('invert');
    });

    e.target.classList.add('invert');
}
function intiNewHoverBtnList(list) {
    list.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            setHover(e, list)
        });
    });
}


const linksShortPres = document.getElementById("socials-short-presentation").querySelectorAll('a');
const skillsList = document.getElementById("langages").querySelectorAll('div');

intiNewHoverBtnList(linksShortPres);

intiNewHoverBtnList(skillsList);