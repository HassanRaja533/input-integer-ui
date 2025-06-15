const input_integer =require('..')

const input1 = input_integer()
const input2 = input_integer()
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