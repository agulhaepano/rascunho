const grid = document.querySelector('#course-grid');
if(grid && Array.isArray(window.CURSOS)){
  for(const curso of window.CURSOS){
    const card=document.createElement('article');card.className='course-card';
    const visual=document.createElement('div');visual.className='course-visual';
    if(curso.foto){const img=document.createElement('img');img.src=curso.foto;img.alt=`Foto do curso ${curso.nome}`;img.loading='lazy';visual.append(img)}
    else{const placeholder=document.createElement('div');placeholder.className='placeholder';placeholder.innerHTML='<span class="flower" aria-hidden="true">✿</span><span>Foto do curso em breve</span>';visual.append(placeholder)}
    const body=document.createElement('div');body.className='course-body';
    const title=document.createElement('h3');title.textContent=curso.nome;
    const label=document.createElement('div');label.className='offer-label';label.textContent='Oferta Black Friday';
    const price=document.createElement('div');price.className='course-price';price.textContent=curso.preco == null ? 'Valor no checkout' : window.moeda(curso.preco);
    const link=document.createElement('a');link.className='course-link';link.href=({'minha-primeira-boneca':'minha-primeira-boneca.html','boneca-russa':'boneca-russa.html','boneca-mel':'boneca-mel.html','boneca-iza':'boneca-iza.html','trio-fofurinhas':'trio-fofurinhas.html','boneca-gorjuss':'boneca-gorjuss.html','trio-tildinha-toy':'trio-tildinha-toy.html'})[curso.id] || (curso.id==='bebe-cebolinha'?'bebe-cebolinha.html':curso.id==='trio-ternura'?'trio-ternura.html':curso.id==='mimos-em-trio'?'mimos-em-trio.html':curso.id==='clarinha'?'clarinha.html':curso.id==='turminha-da-juju'?'turminha-da-juju.html':curso.id==='figurinha-sarah-kay'?'figurinhas-sarah-kay.html':curso.id==='molly'?'molly.html':curso.id==='maluly'?'maluly.html':curso.id==='maria-flor'?'maria-flor.html':curso.id==='nenem-doll'?'nenem-doll.html':curso.id==='emilia'?'emilia.html':`curso.html?curso=${encodeURIComponent(curso.id)}`);link.textContent='Quero esse curso →';link.setAttribute('aria-label',`Conhecer o curso ${curso.nome}`);
    body.append(title,label,price,link);card.append(visual,body);grid.append(card);
  }
}
const navToggle=document.querySelector('#nav-toggle');const nav=document.querySelector('#site-nav');
if(navToggle&&nav){navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
