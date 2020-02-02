# Instruções de instalação

## Ambientes Testados
Ubuntu e MacOSX.

## Dependências
- Node 10
- Yarn(Recomendado) ou NPM
- GIT

## Instalação
- Abrir terminal;
- clonar repositório do projeto: git clone https://github.com/kaiquecorreia/linxtest.git ;
- Acessar pasta do projeto: cd linxtest ;
- Rodar o comando no terminal: yarn(Recomendado) ou npm install ;
- Em seguida rodar comando no terminal: yarn start ;
- O projeto será iniciado no navegador padrão no endereço http://localhost:3000/ .

## Problemas
- Caso a pagina não abra automaticamente acesse diretamente http://localhost:3000/ no navegador.

## Páginas
- http://localhost:3000/ (Página inicial); Arquivos locais: linxtest/app/index.html
- http://localhost:3000/email (Email ); Arquivos locais linxtest/app/email/index.html
## Páginas hospedadas hospedada
- https://kaiquecorreia.github.io/linxtest/
- https://kaiquecorreia.github.io/linxtest/email

## Deploy
- Para realizar o deploy na hospedagem foi utilizado o Gulp;
- Para gerar o build para deploy execute o comando yarn deploy;
- A build do projeto estará dentro da pasta linxtest/docs;
