const button = document.querySelector('button');
const textEl = document.querySelector('p');

button.addEventListener('click', () => {
  const textContent = textEl.textContent;
  if(navigator.clipboard){
    navigator.clipboard.writeText(textContent)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }else{
    alert('fitur tidak tersedia di browser anda');
  }
});