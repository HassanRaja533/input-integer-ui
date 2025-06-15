const input_integer =require('input-integer-ui-hassan_raja')

const opts1 = { min: 1, max: 150 }
const opts2 = { min: 1872, max: 2022 }

const input1 = input_integer(opts1)
const input2 = input_integer(opts2)

const title = "My Demo Title"
const sub_title = "My Demo Title"

const page = document.createElement('div');

page.innerHTML=`
<h1>${title}</h1>
<h2>${sub_title}</h2>
<h3> Enter Your Age</h3>
<x></x>
<h3>Enter Your Year of Birth</h3>
<y></y>
`
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page);