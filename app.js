const app = {}

//declare variable for icon and  menu list
app.burgerMenu = document.querySelector('nav.burgerMenu ul');
app.burgerMenuLists = document.querySelectorAll('nav.burgerMenu li');
app.burgerIcon = document.querySelector('nav.burgerMenu .burgerIcon');
app.form = document.querySelector('form');

//add event listenter to burger icon
app.burgerAction = () => {
    //make burger icon to trigger tranform on burger icon and ul height
    app.burgerIcon.addEventListener('click', () => {
        //after click on the icon, it toggle ul height
        app.burgerMenu.classList.toggle('addHeight');
        //toggle shape of burgerIcon 
        app.burgerIcon.classList.toggle('animateBurgerIcon');
    });
}

//add event lister to burger menu list
app.menuAction = () =>  {
    //make each list to trigger transform on burger icon and ul height
    app.burgerMenuLists.forEach( (list) => {
        list.addEventListener('click', () => {
            //after click on each list, it toggle ul height
            app.burgerMenu.classList.toggle('addHeight');
            //toggle shape of burgerIcon 
            app.burgerIcon.classList.toggle('animateBurgerIcon');
        });
    });
}

//function to animate element on scroll
app.animationOnWindowScroll = () => {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const sectionPostion = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.6;
            if (sectionPostion < screenPosition) {
                section.classList.add('animateOnScroll');
            } else {
                section.classList.remove('animateOnScroll');
            }
        });
    });
}

//function to make touchscreen toggole hover state on list in portfolio
app.listHover = () => {
    const portfolioLists = document.querySelectorAll('.portfolio li');
    portfolioLists.forEach( (portfolioList) => {
        portfolioList.addEventListener( 'touchstart touchend' , ()=>{
            //toggle hover effect when touch on each list
            portfolioList.classList.toggle('hoverEffect');
        });
    });
}
//create init and call all function
app.init = () => {
    app.burgerAction();
    app.menuAction();
    app.animationOnWindowScroll();
    app.listHover();
}

//initial all functions in the app 
app.init();


