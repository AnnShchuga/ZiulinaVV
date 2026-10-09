
document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('nav.menu').classList.toggle('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.chips').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 c.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const k=b.dataset.k;
 document.querySelectorAll('[data-cat]').forEach(m=>m.style.display=(k==='all'||m.dataset.cat===k)?'':'none')}));
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
