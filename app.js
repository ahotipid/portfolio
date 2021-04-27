const app = {}

// ///////////////burger menu function/////////////////
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
app.listAction = () =>  {
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

//empty form on Submit
app.formEmpty = () => {
    app.form.addEventListener('submit', () => {
        const inputs = document.querySelectorAll('form input');
        const textarea = document.querySelector('form textarea');
        inputs.forEach( (input) => {
            input.value = "";
        });
        textarea.value = "";
    });
}

//create init and call all function
app.init = () => {
    app.burgerAction();
    app.listAction();
    app.formEmpty();
}

//initial all functions in the app 
app.init();


