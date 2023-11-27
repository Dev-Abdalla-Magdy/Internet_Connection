let title = document.querySelector('.title');
let reloadBtn = document.querySelector('#reload_btn');
let suggestions = document.querySelector('.suggestions');
let container = document.querySelector('.container');

reloadBtn.addEventListener('click', ()=>{
  container.classList.remove('hide');
  window.location.reload();
})
window.onload = ()=> {
  container.classList.remove('hide');
  if (window.navigator.offLine) {
    offLine();
  } else if (window.navigator.onLine) {
    onLine();
  }
}
window.addEventListener('online', ()=>{
  onLine();
});
window.addEventListener('offline', ()=>{
  offLine();
});

function onLine() {
  container.classList.remove('hide');
  title.innerHTML = 'You Are Online';
  title.style.color = '#50ff50';
  reloadBtn.classList.add('hide');
  suggestions.classList.add('hide');
}

function offLine() {
  container.classList.remove('hide');
  title.innerHTML = 'You Are Offline';
  title.style.color = '#ff5050';
  reloadBtn.classList.remove('hide');
  suggestions.classList.remove('hide');
}