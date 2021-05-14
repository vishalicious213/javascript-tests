/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const modal = document.querySelector('#modal')
const openBtn = document.querySelector('#open-modal-btn')
const closeBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay
openBtn.addEventListener('click', () => {
  modal.classList.add('open')
  overlay.classList.add('open')
  // console.log('open')
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay
// closeBtn.addEventListener('click', () => {
//   modal.classList.remove('open')
//   overlay.classList.remove('open')
//   // console.log('close')
// })

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
// overlay.addEventListener('click', () => {
//   modal.classList.remove('open')
//   overlay.classList.remove('open')
// })


// BETTER WAY THAN TODO 4 AND BONUS, ABOVE:
// both the close button and the overlay listen for a click
// when either are clicked, they remove the 'open' class from both
// closeModal is extracted and can be updated and affect both elements
// the event listeners call closeModal on click, its the 2nd parameter
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

function closeModal() {
  modal.classList.remove('open')
  overlay.classList.remove('open')
}