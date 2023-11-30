export function yellowSubmarine(){
   document.getElementById('pepinillo').style.color = "yellow";
}
export function  changeSize(){
  document.getElementById('tabla').width =1050
}
export function countWords() {
  const texto = document.getElementById('LI').textContent;
  const palabrasContadas = texto.trim().split(/\s+/).length;
  return palabrasContadas;
}

