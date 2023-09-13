class Musica {
  constructor(public titulo: string, public artista: string, public duracao: number) {}
}

class BibliotecaMusical {
  private musicas: Musica[] = [];

  adicionarMusica(musica: Musica) {
    this.musicas.push(musica);
  }

  listarMusicas() {
    return this.musicas;
  }

  reproduzirMusica(indice: number) {
    if (indice >= 0 && indice < this.musicas.length) {
      const musica = this.musicas[indice];
      console.log(`Reproduzindo "${musica.titulo}" de ${musica.artista}`);
    } else {
      console.log('Índice de música inválido.');
    }
  }

  calcularDuracaoTotal() {
    const duracaoTotal = this.musicas.reduce((total, musica) => total + musica.duracao, 0);
    return duracaoTotal;
  }
}

class Usuario {
  private minhaBiblioteca: BibliotecaMusical;
  private bibliotecaGeral: BibliotecaMusical;
  constructor(public nome: string, biblioteca: BibliotecaMusical) {
    this.minhaBiblioteca = new BibliotecaMusical();
    this.bibliotecaGeral = biblioteca;
  }

  adicionarMusica(musica: Musica) {
    this.minhaBiblioteca.adicionarMusica(musica);
    this.bibliotecaGeral.adicionarMusica(musica);
  }

  listarMusicas() {
    return this.minhaBiblioteca.listarMusicas();
  }

  reproduzirMusica(indice: number) {
    this.minhaBiblioteca.reproduzirMusica(indice);
  }
}

// Exemplo de uso
const bibliotecaGeral = new BibliotecaMusical();
const usuario1 = new Usuario('Jamyle', bibliotecaGeral);
const usuario2 = new Usuario('Layla', bibliotecaGeral);

const musica1 = new Musica('Música 1', 'Artista 1', 180);
//const musica1 = input("Digite uma música");
const musica2 = new Musica('Música 2', 'Artista 2', 240);
const musica3 = new Musica('Música 3', 'Artista 3', 200);

usuario1.adicionarMusica(musica1);
usuario1.adicionarMusica(musica2);
usuario2.adicionarMusica(musica3);

console.log('Músicas na biblioteca do usuário 1:');
console.log(usuario1.listarMusicas());

console.log('Músicas na biblioteca do usuário 2:');
console.log(usuario2.listarMusicas());

console.log('Todas as músicas dos usuários:')
console.log(bibliotecaGeral.listarMusicas());

console.log(`Duração total das músicas na biblioteca: ${bibliotecaGeral.calcularDuracaoTotal()} segundos`);

usuario1.reproduzirMusica(0); // Reproduz a primeira música na biblioteca do usuário 1


