# Como configurar o Eslint

instalar as dependecias do Eslint par Typescript

> 1- yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

> 2- yarn eslint --init

> 3- Selecionar as configurações do Eslint

Como ele instala pelo NPM e estamos usando o YARN, delete o arquivo package.json.lock
e rode o comando YARN

`Se algum desses comando falhar verificar as permições das pastas Então ou alterar as permições com CHMOD ou utilizar SUDO no inicio dos comandos`

Por fim adicionar as seguintes linhas de codigo as configurações do VsCode

"eslint.autoFixSave": true,
"eslint.validate": [
"javascript",
"javascriptreact",
{
"laguage": "typescript",
"autoFix": true
},
{
"laguage": "typescriptreact",
"autoFix": true
}
]

## Caso utilze ja o prettier adicionar essas configurações para evitar conflito entre os dois

"[typescript]": {
"editor.formatOnSave": false,
},
"[typescriptreact]": {
"editor.formatOnSave": false,
},
