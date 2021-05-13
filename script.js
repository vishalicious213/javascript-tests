// 1. select all elements that we'll work with
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. Add a new element when submit is clicked
form.addEventListener('submit', e => {
    e.preventDefault()

    // console.log(input.value)

    // 1. create a new item
    const item = document.createElement('div') // create a div
    item.innerText = input.value // set its text to what was typed
    item.classList.add('list-item') // add the list-item class
    console.log(item) // confirm the contents of the div

    // 2. add item to the list
    list.appendChild(item)

    // 3. clear input after click to prep for new item
    input.value = ''

    // 4. setup event listener to delete item when clicked
    item.addEventListener('click', () => {
        list.removeChild(item)
        // item.remove() // could also use this to remove the item
    })
})