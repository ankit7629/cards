const cards = document.querySelectorAll('.inner-container');

cards.forEach((card)=>{

    card.addEventListener('click',()=>{
        removeActiveClass();
        card.classList.add('active')
    })
})

function removeActiveClass(){ 
    cards.forEach((card)=>{
        card.classList.remove('active')
    })
}
































// const cards = document.querySelectorAll('.inner-container');

// cards.forEach((card) => {
    
//         card.addEventListener('click', () => {
//             removeActiveClasses();
//             card.classList.add('active');
//         });
// })

// function removeActiveClasses() {
//     cards.forEach((card) => {
//         card.classList.remove('active');
//     });
// }