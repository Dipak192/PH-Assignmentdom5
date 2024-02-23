let seats = document.getElementsByClassName('btn-bg');
let count = 0;
for (let seat of seats) {
   
    seat.addEventListener('click', (e) => {
        seat.classList.add('bg-[#1DD100]');

        let price = e.target.children[0].innerText;
        let convertedIndPrice = parseInt(price);
        let count = count + convertedIndPrice;
        count++;
        return count;
        

        let totalPrice = document.getElementById('totalprice');
        totalPrice.appendChild=(Total);
        let convertedTotalPrice = parseInt(totalPrice);
        convertedTotalPrice.textContent= (convertedIndPrice);
        
        
    })
    
}