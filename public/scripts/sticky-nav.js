const links = new WeakMap();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) links.get(entry.target).classList.add('on-screen');
        else links.get(entry.target).classList.remove('on-screen');
    });
}, {rootMargin:"-200px 0px"});
for(const link of document.getElementById('sticky-nav').getElementsByTagName('a')){
    const href = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(href);
    if(section){
        links.set(section, link);
        observer.observe(section);
    }
}