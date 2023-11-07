// 1
// Select the div with the id of "problem-one" and change the border color to
// red and the border width to 3 pixels

const one = document.getElementById('problem-one')
one.style.borderColor = 'red';
one.style.borderWidth = '3px'


// 2
// Select the text in the first div that has the class of "even" and change the
// font color to green and the font style to bold

const two = document.querySelector('.even')
two.style.color = 'green'
two.style.fontWeight = 'bold'

// 3
// Select all of the elements with the class of "odd" and add a box shadow. You
// may choose your own box-shadow values.

const three = document.querySelectorAll('.odd')
three.forEach((el) => {
    el.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 1)'
})


// 4
// Select the fourth box with a selector of your choice. Change the text inside
// the box to the string "Four"

const four = document.getElementById('problem-four')
four.textContent = 'Four'


// 5
// Select the fifth box. Remove the text "5", and replace it with a child button that says "5!"

const five = document.getElementById('problem-five')
const button = document.createElement('button')
button.textContent = '5!'
five.textContent = '';
five.appendChild(button)


// 6
// Select the span element. Remove it from the DOM.

const six = document.querySelector('span')
six.remove()


// 7
// Select the element with the number 7, and change the number to 6 (because you
// just removed number 6!)

const seven = document.querySelector('.seven')
seven.textContent = '6'


// 8
// Select the last box, and add the class of "last". This will apply new styling
// to the box if successful. Change the text inside to box to "END!!!"

const eight = document.getElementById('problem-eight')
eight.classList.add('last')
eight.textContent = 'END!!!'
