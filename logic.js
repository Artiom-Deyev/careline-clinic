//Nav bar to change background on scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 0) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });


//Button on click
const btnArr = document.querySelectorAll("#button");
const layer = document.querySelector('.layer');

btnArr.forEach(el => el.addEventListener('click', () => {layer.classList.remove("layer--none");
}));


//Layer to dissapear
if (layer) {
    layer.addEventListener('click', () => {layer.classList.add('layer--none');
    })
}