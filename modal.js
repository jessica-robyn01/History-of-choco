//get modal element
const modal = document.querySelector('#cakeModal');
//Get open modal button
const modalBtn = document.querySelector('#cakeBtn');
//Get close button
const closeBtn = document.querySelector('.close');

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
  modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}