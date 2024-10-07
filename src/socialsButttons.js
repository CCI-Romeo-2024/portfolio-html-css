
const socials = document.querySelector('.socials');
const links = socials.querySelectorAll('a');
const firstLink = links[0];

function setHover() {


    links.forEach(link => {
        firstLink.classList.remove('invert-default');

        const isHovered = Array.from(links).some(link => link.matches(':hover'));
        if (isHovered)
            link.classList.add('invert-default');

    });


}

links.forEach(link => {
    link.addEventListener('mouseenter', setHover);
    link.addEventListener('mouseleave', setHover);
});




