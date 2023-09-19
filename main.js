// toggle icon navbar

// const menuIcon = document.querySelector("#menu-icon");
// const navbar = documnet.querySelector(".navbar");


const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x-circle');
  navbar.classList.toggle('active');
});

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }



//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll the use this 
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicked at navbar links(scroll)

    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');

    //animation footer on scroll
    
} 