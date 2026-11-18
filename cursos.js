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
  {id:'clarinha', nome:'Clarinha', preco:79, foto:'assets/clarinha.jpg?v=20261117-mimos-correto5', descricao:'Conheça o curso Clarinha do Ateliê Agulha e Pano.', checkout:''}
];
window.moeda = valor => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(valor);
