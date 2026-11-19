// Lista de cursos e preços da Black Friday.
// Fotos e links de checkout serão adicionados depois.
window.CURSOS = [
  {id:'trio-ternura', nome:'Trio Ternura', preco:157, foto:'assets/mimos-em-trio.jpg?v=20261117-fotos-finais', descricao:'Conheça o curso Trio Ternura do Ateliê Agulha e Pano.', checkout:''},
  {id:'mimos-em-trio', nome:'Mimos em Trio', preco:157, foto:'assets/trio-ternura.jpg?v=20261117-fotos-finais', descricao:'Conheça o curso Mimos em Trio do Ateliê Agulha e Pano.', checkout:''},
  {id:'turminha-da-juju', nome:'Turminha da Juju', preco:397, foto:'assets/turminha-da-juju.jpg?v=20261117-fotos-revisadas', descricao:'Conheça o curso Turminha da Juju do Ateliê Agulha e Pano.', checkout:''},
  {id:'figurinha-sarah-kay', nome:'Figurinha Sarah Kay', preco:157, foto:'assets/figurinhas-sarah-kay.jpg?v=20261117-fotos-revisadas', descricao:'Conheça o curso Figurinha Sarah Kay do Ateliê Agulha e Pano.', checkout:''},
  {id:'bebe-cebolinha', nome:'Bebê Cebolinha', preco:73, foto:'assets/bebe-cebolinha.jpg?v=20261117-fotos-revisadas', descricao:'Conheça o curso Bebê Cebolinha do Ateliê Agulha e Pano.', checkout:''},
  {id:'molly', nome:'Molly', preco:59, foto:'assets/molly.jpg?v=20261117-tres-fotos-novas', descricao:'Conheça o curso Molly do Ateliê Agulha e Pano.', checkout:''},
  {id:'maluly', nome:'Maluly', preco:85, foto:'assets/maluly.jpg?v=20261117-tres-fotos-novas', descricao:'Conheça o curso Maluly do Ateliê Agulha e Pano.', checkout:''},
  {id:'maria-flor', nome:'Maria Flor', preco:197, foto:'assets/maria-flor.jpg?v=20261117-mimos-correto5', descricao:'Conheça o curso Maria Flor do Ateliê Agulha e Pano.', checkout:''},
  {id:'nenem-doll', nome:'Neném Doll', preco:75, foto:'assets/nenem-doll.jpg?v=20261117-tres-fotos-novas', descricao:'Conheça o curso Neném Doll do Ateliê Agulha e Pano.', checkout:''},
  {id:'emilia', nome:'Emília', preco:49, foto:'assets/emilia.jpg?v=20261117-mimos-correto5', descricao:'Conheça o curso Emília do Ateliê Agulha e Pano.', checkout:''},
  {id:'clarinha', nome:'Clarinha', preco:79, foto:'assets/clarinha.jpg?v=20261117-mimos-correto5', descricao:'Conheça o curso Clarinha do Ateliê Agulha e Pano.', checkout:''},
  {id:'minha-primeira-boneca', nome:'Minha Primeira Boneca', preco:39, foto:'assets/minha-primeira-boneca.jpg', descricao:'Conheça o curso Minha Primeira Boneca do Ateliê Agulha e Pano.', checkout:'https://pay.hotmart.com/H77984066V?off=mubtcxah&checkoutMode=10'},
  {id:'boneca-russa', nome:'Bonecas Russas Vivi e Alícia', preco:79, foto:'assets/bonecas-russas-alicia-vivi.jpg', descricao:'Conheça o curso Boneca Russa do Ateliê Agulha e Pano.', checkout:'https://pay.hotmart.com/U95487858R?off=0j7vcd3v&checkoutMode=10'},
  {id:'boneca-mel', nome:'Boneca Mel', preco:97, foto:'assets/boneca-mel.jpg', descricao:'Conheça o curso Boneca Mel do Ateliê Agulha e Pano.', checkout:'https://www.atelieragulhaepano.com.br/bonecas/cursos/curso-online-boneca-mel'},
  {id:'boneca-iza', nome:'Boneca Iza', preco:47, foto:'assets/boneca-iza.jpg', descricao:'Conheça o curso Boneca Iza do Ateliê Agulha e Pano.', checkout:'https://pay.hotmart.com/E95072183W?off=h56sf7ye'},
  {id:'trio-fofurinhas', nome:'Trio Fofurinhas', preco:157, foto:'assets/trio-fofurinhas.jpg', descricao:'Conheça o curso Trio Fofurinhas do Ateliê Agulha e Pano.', checkout:'https://pay.hotmart.com/V101143156W?off=xtzv8uc5&checkoutMode=10'},
  {id:'boneca-gorjuss', nome:'Boneca Gorjuss', preco:57, foto:'assets/boneca-gorjuss.png', descricao:'Conheça o curso Boneca Gorjuss do Ateliê Agulha e Pano.', checkout:'https://www.atelieragulhaepano.com.br/bonecas/cursos/aula-da-boneca-gorjuss-bolsa-gorjuss'},
  {id:'trio-tildinha-toy', nome:'Trio Tildinha Toy', preco:67, foto:'assets/trio-tildinha-toy.png', descricao:'Conheça o curso Trio Tildinha Toy do Ateliê Agulha e Pano.', checkout:'https://www.atelieragulhaepano.com.br/bonecas/cursos/video-aula-tildinha-toy'}
];
window.moeda = valor => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(valor);
