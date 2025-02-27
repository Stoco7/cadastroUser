const minhasFuncoes = require('./funcoes')

test('O mínimo é 5 e passei 3, tem que retornar false', () =>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5,'bob')).toBe(false);
})

test('O mínimo é 3 e passei 5, tem que retornar true', () =>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3,'gutox')).toBe(true);
})

test('Campo obrigatório vazio deve retornar false', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('')).toBe(false);
});

test('Campo obrigatório preenchido deve retornar true', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('texto')).toBe(true);
});

test('Senhas iguais devem retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('123456', '123456')).toBe(true);
});

test('Senhas diferentes devem retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('123456', 'abcdef')).toBe(false);
});

test('Senha com pelo menos uma letra maiúscula deve retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('Senha123')).toBe(true);
});

test('Senha sem letras maiúsculas deve retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('senha123')).toBe(false);
});

test('Senha com caractere especial deve retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Senha@123')).toBe(true);
});

test('Senha sem caractere especial deve retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Senha123')).toBe(false);
});

test('E-mail válido deve retornar true', () => {
    expect(minhasFuncoes.fnValidarEmail('teste@email.com')).toBe(true);
});

test('E-mail inválido deve retornar false', () => {
    expect(minhasFuncoes.fnValidarEmail('testeemail.com')).toBe(false);
});


