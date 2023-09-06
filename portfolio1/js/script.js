//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=() =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top<offset+height)
        {
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');
            });
            // active sections for animation
            sec.classList.add('show-animate');
        }
        // use animate repeat on scroll
        else{
            sec.classList.remove('show-animate');
        }
    });
   // sticky header
   let header=document.querySelector('header');

   header.classList.toggle('sticky',window.scrollY>100);
  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
//   animation footer on scroll
let footer=document.querySelector('footer');
footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
}
// darkmode icon settings
let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick= () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
// read more button
const readMore=document.getElementById("readMore");
const educationContent=document.getElementById("education");
   // Add a click event listener to the button
   readMore.addEventListener("click", function() {
    // Toggle the visibility of the additional content
    if (educationContent.style.display === "none" || educationContent.style.display === "") {
      educationContent.style.display = "block";
      readMore.innerText = "Read Less";
    } else {
      educationContent.style.display = "none";
      readMore.innerText = "Read More";
    }
  });