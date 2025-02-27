const minhasFuncoes = require('./funcoes')

test('O mínimo é 5 e passei 3, tem que retornar false', () =>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5,'bob')).toBe(false);
})

test('O mínimo é 3 e passei 5, tem que retornar true', () =>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3,'gutox')).toBe(true);
})
