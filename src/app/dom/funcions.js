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
export  function  imagenloca(){
  let images = document.getElementById("boxImage")
  images.innerHTML = '<img src="https://img.desmotivaciones.es/201912/chiste-supe-imagenes.jpg">'
}
