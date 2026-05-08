# Portfolio

Portfolio front-end desenvolvido em React.

## Scripts

```bash
npm install
npm start
npm run build
npm test -- --watchAll=false
```

## Estrutura

```text
public/              Arquivos publicos do app
src/
  assets/
    img/             Personagem e imagens principais
    projects/        Screenshots dos projetos
  components/        Componentes React por secao
  App.js             Composicao principal
  App.css            Estilos globais e responsivos
```

## Personagem

O personagem do topo fica em:

```text
src/assets/img/Person.png
```

## Imagens dos projetos

Para mostrar projetos com mais força visual, use screenshots reais da interface
quando o projeto tiver tela. O melhor formato e:

```text
src/assets/projects/staffflow-1.webp
src/assets/projects/staffflow-2.webp
src/assets/projects/nexoops-1.webp
```

Use prints em 16:9 ou 16:10, por exemplo 1440x900 ou 1600x1000, com a tela
principal do sistema aberta. Para APIs e automacoes sem interface, vale usar
Swagger, dashboard, terminal com execucao real, fluxo da automacao ou resultado
gerado em PDF/Excel.

O detalhe do projeto detecta automaticamente imagens com o slug do projeto:

```text
nexoops
truckwash
routecost
exportacao
rastrecamargo
staffflow
inspecaoapp
checklistapp
leilaoapp
mutiroes-comunitarios
automacoes-operacionais
```

Quando houver mais de uma imagem para o mesmo projeto, a pagina de detalhe
mostra paginacao automaticamente.
