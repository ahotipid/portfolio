const app = {}

// ///////////////burger menu function/////////////////
//declare variable for icon and  menu list
app.burgerMenu = document.querySelector('nav.burgerMenu ul');
app.burgerMenuLists = document.querySelectorAll('nav.burgerMenu li');
app.burgerIcon = document.querySelector('nav.burgerMenu .burgerIcon');

//add event listenter to burger icon
app.burgerAction = function () {
    //make burger icon to trigger tranform on burger icon and ul height
    app.burgerIcon.addEventListener('click', function() {
        //after click on the icon, it toggle ul height
        app.burgerMenu.classList.toggle('addHeight');
        //toggle shape of burgerIcon 
        app.burgerIcon.classList.toggle('animateBurgerIcon');
    });
}

//add event lister to burger menu list
app.listAction = function () {
    //make each list to trigger transform on burger icon and ul height
    app.burgerMenuLists.forEach( function(list) {
        list.addEventListener('click', function () {
            //after click on each list, it toggle ul height
            app.burgerMenu.classList.toggle('addHeight');
            //toggle shape of burgerIcon 
            app.burgerIcon.classList.toggle('animateBurgerIcon');
        })
    });
}

//create init
app.init = function () {
    app.burgerAction();
    app.listAction();
    console.log(app.burgerMenuLists);
}

//initial all functions in the app 
app.init();


