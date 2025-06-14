module.exports = input_integer

const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)

function input_integer () {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })
  shadow.innerHTML = `<input> </input>`

  shadow.adoptedStyleSheets =[sheet]
  return el
}

function get_theme(){
return`
input{
padding: 4px 8px;
background-color: hsla(284, 45%, 54%, 1);
padding: 8px 12px;
border-radius: 8px 
}
input:focus{
  background-color: hsla(198, 45%, 54%, 1);  
}`


}