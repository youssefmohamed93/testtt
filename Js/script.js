let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('ul');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '40px',
        duration: 2000,
        delay: 200,
        reset: true
    }
);

sr.reveal( '.main-image' , {origin: 'top'} );
sr.reveal( '.main-text' , {origin: 'left'} );
sr.reveal( '.box' , {origin: 'top'} );
sr.reveal( '.box' , {origin: 'top'} );
sr.reveal( '.box' , {origin: 'top'} );
sr.reveal( '.left-content' , {origin: 'left'} );
sr.reveal( '.textt-container' , {origin: 'right'} );
