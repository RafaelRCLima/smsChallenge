# Desafio SMS

## Descrição do desafio

Criação de uma API em Node.JS que converta textos digitados para os respectivos números que deveriam ser digitados quando não se tem a 
possibilidade de utilizar teclado QWERTY, assim como converter os números digitados para o texto correspondente.

O enunciado completo do desafio se encontra neste [link](https://gist.github.com/PauloLuan/2f0a6a878c80b96a088ab52e28d4be14)

## Tecnologias utilizadas

- NodeJS
- Docker
- Docker Compose
- MongoDB
- Insomnia

## Requisitos para execução do projeto

- Docker
- Docker Compose
- Insomnia ou Postman (Ou similar, para enviar requisições do tipo POST)

## Como executar

Clone o projeto em algum diretório de sua escolha e execute o comando 'docker-compose up'. 
Ao término da execução ficarão disponíveis dois endpoints em localhost:3000:

- /convertSms - Requisição do tipo POST, um texto precisa ser enviado em formato json (ex: { "sms": "Digite seu texto aqui"}), então a aplicação recebe uma string numérica convertendo para texto ('833777783303_33063377772' para 'teste de mesa')
ou o contrário ('teste de mesa' para '833777783303_33063377772'). 

<b>Esta versão não trata caracteres especiais como ç, letras acentuadas ou símbolos.</b>

- /listSms - Lista todas as mensagens convertidas até o momento apresentando até 10 resultados por página.
O valor padrão de página é 1, então pode ser omitido, mas para alternar entre elas é 
preciso passar o argumento por query param na url ('localhost:3000/listSms?page=2').

Também é possível filtrar os resultados por data de entrada, para isso uma data no formato '2020-07-23' 
precisa ser enviada como query param em conjunto com a página na url ('localhost:3000/listSms?page=2&date=2020-07-23').

## Testes

Para executar os testes implementados é preciso ter o NodeJs instalado localmente assim como o MongoDB em container Docker. 
Em primeiro lugar deve-se executar o comando 'yarn install' (ou 'npm install' dependendo do gerenciador de pacotes).
A aplicação já disponibiliza um container mongo (fica disponível após executar 'docker-compose up' pela primeira vez) que pode ser utilizado para os testes, nesse caso será preciso executar 'docker start mongo' antes e depois o comando de testes apropriado, como exemplo, este projeto utilizou o Yarn como gerenciador de pacotes, então o comando, nesse caso, é 'yarn test'.
