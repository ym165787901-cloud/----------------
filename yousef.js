const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>{menu.setAttribute('aria-expanded',links.classList.toggle('open'))});
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});