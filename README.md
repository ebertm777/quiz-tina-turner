# Base - Infográficos O Globo

## Principais comandos

- Para instalar as dependências

```console
$ npm i
```

- Para rodar o projeto:

```console
$ npm start
```

- Para fazer o build projeto:

```console
$ npm run build
```

- Para gerar os arquivos de embed, adicione `:embed` ao comando de build

```console
$ npm run build:embed
```

---

## Componentes

Os componentes estão no caminho `./src/components/commons`

### Você encontrará os seguintes componentes:

- [ScrollyTelling ](./src/components/common/docs/SCROLLYTELLING.md)

---

## Template creator

Run commands below on project root folder

Create React functional component inside folder `./src/components/`

```console
$ npm run create -- [ComponentName]
```

Create React functional component in specific path

```console
$ npm run create -- [ComponentName] -p ./src
```

Create React functional component inside folder `./src/components/` without style (.scss) file

```console
$ npm run create -- [ComponentName] -s no
```

Create React class component inside folder `./src/components/`

```console
$ npm run create -- [ComponentName] -t class
```

---

## Váriaveis de ambiente usadas no package.json

#### NODE_ENV

Define o ambiente onde a aplicação está rodando

- `production` - Ambiente de produção, que pode ser qlt e o real
- `development` - Ambiente local de desenvolvimento

#### INFO_ENV

Define o ambiente do infográfico

- `qlt`

#### INFO_CHANNEL

Define em qual canal o infográfico será publicado

- `oglobo`
- `epoca`

---

## Principais dependências

[React Slingshot](https://github.com/coryhouse/react-slingshot) Boilerplate usado

[@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

[styled-components](https://styled-components.com/)

---

## Links

[DOCs AWS cloudfront](https://infoglobo-my.sharepoint.com/:w:/g/personal/carlos_sa_midia3_oglobo_com_br/EXEQwgCZC_1Nho7OdDDzwjIBYXZdwESz4mIGfGPqa2Vz1A?e=F4uVba)

[React-slingshot](https://github.com/coryhouse/react-slingshot) Boilerplate usado

---

## Observações

#### No infograficos-estaticos, links do cloudfront com problema de CORS

- prod: `https://d37iydjzbdkvr9.cloudfront.net/${s3FolderName}/`
- qlt: `https://d2tyb3wv96cdl8.cloudfront.net/${s3FolderName}/`
