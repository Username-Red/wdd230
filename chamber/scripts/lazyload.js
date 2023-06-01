const images = document.querySelectorAll("[data-src]");
const faders = document.querySelectorAll(".fade-in");


function preloadImage(img) {
    const src = img.getAttribute("data-src")
    if(!src) {
        return;
    } 
    
    img.src = src;
    
    
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        var i = 0;
        if(!entry.isIntersecting) {
            return;
        } else {
            
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            
        }

        i += 1;
    })
}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image);
    
});

// const appearOptions = {};

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             return;
//         } else {
//             entry.target.classList.add("appear");
//             appearOnScroll.unobserve(entry.target);
//         }
//     })
// }, appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader)
// })