
(function(){var b=document.querySelector('.totop');if(!b)return;
 function t(){b.classList.toggle('show',window.scrollY>500)}
 window.addEventListener('scroll',t,{passive:true});t();
 b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})})();
document.querySelectorAll('.carousel').forEach(function(c){var tr=c.querySelector('.rev-track,.req');if(!tr)return;
 var btns=c.querySelectorAll('.car-btn');
 function upd(){var max=tr.scrollWidth-tr.clientWidth-2;btns.forEach(function(b){var d=parseInt(b.dataset.dir,10);b.disabled=d<0?tr.scrollLeft<=2:tr.scrollLeft>=max})}
 btns.forEach(function(b){b.addEventListener('click',function(){
  var card=tr.firstElementChild;var step=card?card.getBoundingClientRect().width+24:360;
  tr.scrollBy({left:step*parseInt(b.dataset.dir,10),behavior:'smooth'})})});
 tr.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd()});
document.querySelectorAll('.test-form').forEach(function(f){var c=f.querySelector('.tcount'),tot=parseInt(f.dataset.total,10);
 function upd(){var names={};f.querySelectorAll('input[type=radio]:checked').forEach(function(r){names[r.name]=1});c.textContent='Отвечено: '+Object.keys(names).length+' из '+tot}
 f.addEventListener('change',upd);upd()});
(function(){var c=document.getElementById('cookie');if(!c)return;var k='vz-cookie',v=null;
 try{v=localStorage.getItem(k)}catch(e){}
 if(!v)c.hidden=false;
 c.addEventListener('click',function(e){var b=e.target.closest('button[data-c]');if(!b)return;
  try{localStorage.setItem(k,b.dataset.c)}catch(x){}c.hidden=true})})();
document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('nav.menu').classList.toggle('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.chips').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 c.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const k=b.dataset.k;const g=c.nextElementSibling;
 if(g)g.querySelectorAll('[data-cat]').forEach(m=>m.style.display=(k==='all'||m.dataset.cat===k)?'':'none')}));
document.querySelectorAll('.lead-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
 const n=f.querySelector('[name=n]').value.trim(),c=f.querySelector('[name=c]').value.trim();
 const t='Здравствуйте! Меня зовут '+(n||'—')+'. Хочу записаться на консультацию. Как со мной удобно связаться: '+(c||'—');
 window.open('https://t.me/vera_ziulina?text='+encodeURIComponent(t),'_blank')}));
document.querySelectorAll('.quiz').forEach(function(quiz){
 var btn=quiz.querySelector('.quiz-submit');if(!btn)return;
 var results=quiz.querySelectorAll('.quiz-result'),qs=quiz.querySelectorAll('.quiz-question'),warn=quiz.querySelector('.quiz-warning');
 btn.addEventListener('click',function(){var total=0,all=true;
  qs.forEach(function(q){var c=q.querySelector('input:checked');if(!c){all=false;return}total+=parseInt(c.value,10)});
  if(!all){if(warn)warn.style.display='block';return}
  if(warn)warn.style.display='none';
  results.forEach(function(r){r.classList.remove('is-visible');
   if(total>=parseInt(r.dataset.min,10)&&total<=parseInt(r.dataset.max,10))r.classList.add('is-visible')});
  var v=quiz.querySelector('.quiz-result.is-visible');if(v)v.scrollIntoView({behavior:'smooth',block:'nearest'})})});
