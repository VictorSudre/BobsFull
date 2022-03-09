import BobsPo from './BobsPO'

//Cenario: Validar cardápio de sanduíches e informações nutricionais.

Given(/^que eu acesse a aplicação web do Bob's$/, () => {
    //Link de acesso a aplicação
    BobsPo.acessarBobs()
});

And(/^valide o cardápio de sanduíches$/, () => {
    //Validar Cardápio de sanduíches
    BobsPo.validarCardapioSanduiche()
});

When(/^eu selecionar um sanduíche$/, () => {
    //Selecionar Sanduíche
    BobsPo.selecionarSanduiche()
});

Then(/^deve ser apresentada as informações nutricionais do sanduíche.$/, () => {
    BobsPo.infoSanduiche()
});


//Cenario: Realizar cadastro no Bob's fã 



Given(/^que eu acesse a aplicação web do Bob's fã$/, () => {
    BobsPo.acessarBobsFa()
});

And(/^clique no botão "([^"]*)"$/, (args1) => {
    BobsPo.clicarBotaoSejaUmFa()
});

When(/^eu preenche os campos de cadastro$/, () => {
    BobsPo.preencherFormulario()
});

And(/^clicar em "([^"]*)"$/, (args1) => {
    BobsPo.finalizarCadastro()
});

Then(/^devo ser cadastrado.$/, () => {
    BobsPo.validarTelaInicialFa()
});
