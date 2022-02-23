const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function(){
    const userName = document.getElementById('name-surname').value;
    document.getElementById('customer-name').innerHTML= userName;
    const destinationDistance = document.getElementById('trip-distance').value;
    let ticketPrice = 0.27 * destinationDistance;
    
    const userAge=document.getElementById('age-range').value;
    if (userAge == "2"){
        document.getElementById('ticket-category').innerHTML="Biglietto Under 18";
        ticketPrice = ticketPrice * .8;
        document.getElementById('ticket-price').innerHTML= ticketPrice.toFixed(2) + "€";

    } else if (userAge =="3") {
        document.getElementById('ticket-category').innerHTML="Biglietto Over 65";
        ticketPrice = ticketPrice * .6;
        document.getElementById('ticket-price').innerHTML= ticketPrice.toFixed(2) + "€";
    } else {
        document.getElementById('ticket-category').innerHTML="Biglietto Standard";
        ticketPrice = ticketPrice;
        document.getElementById('ticket-price').innerHTML= ticketPrice.toFixed(2) + "€";

    }
    let printedTicket = document.querySelector('section div');
    printedTicket.classList.remove('d-none');
    printedTicket.classList.add('d-block');
    
});
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener ('click', function(){
    document.querySelector('#name-surname').value="";
    document.querySelector('#trip-distance').value="";
    let printedTicket = document.querySelector('section div');
    printedTicket.classList.remove('d-block');
    printedTicket.classList.add('d-none');
});



