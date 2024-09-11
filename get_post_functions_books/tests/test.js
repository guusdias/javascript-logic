const { postBooks, getBooks, clearBooks } = require('../index.js')

describe('Biblioteca de Ficção Científica', () => {
  
  beforeEach(() => {
    clearBooks()
  })

  test('Adicionar um livro na biblioteca', () => {
    postBooks('Duna')
    const books = getBooks()
    expect(books).toContain('Duna')
  })

  test('Adicionar múltiplos livros na biblioteca', () => {
    postBooks('Fundação')
    postBooks('Neuromancer')
    const books = getBooks()
    expect(books).toContain('Fundação')
    expect(books).toContain('Neuromancer')
  })

  test('Listar todos os livros da biblioteca', () => {
    postBooks('O Fim da Infância')
    postBooks('Eu, Robô')
    const books = getBooks()
    expect(books).toEqual(['O Fim da Infância', 'Eu, Robô'])
  })

  test('Listar livros vazia quando nenhum livro foi adicionado', () => {
    const books = getBooks()
    expect(books).toEqual([])
  })
})
