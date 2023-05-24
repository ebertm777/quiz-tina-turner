# Scrollytelling

## Aquivos

- `Scrollytelling.jsx` contém a lógica do efeito do scroll, administra a imagem que está sendo mostrada e quais componentes estão dentro do view height;
- `ScrollyTellingSection.jsx` é sobre cada seção que será mostrada, se aparecerá na esquerda/direita e suas lógicas;
- `SectionCardGlobalStyles.js` aqui contém o estilo do card que flutuará na tela. Você deve colocar o `className="section-content-card"` na div que desejar;

---

## Como usar

- Primeiramente você deverá importar o estilo global `SectionCardGlobalStyles.js` dentro do seu arquivo `index.js`, da seguinte maneira:

```javascript
import SectionCardGlobalStyle from '...';

render(
  <>
    <App />
    <GlobalStyle />
    <SectionCardGlobalStyle />
  </>,
  document.getElementById('info-app'),
);
```

- Feito isto, poderá importar o componente dentro da tela que desejar:

```javascript
import Scrollytelling from '...';
import ScrollytellingSection from '...';

const Main = () => {
  const onScroll = () => {};

  return (
    <Scrollytelling isFadeTransition onScroll={onScroll}>
      {SCROLLY_INFO.map((info, index) => (
        <ScrollytellingSection
          key={index}
          background={
            <img
              src={`${AMAZON_S3_URL}/500-mil-covid/images/scrolly${index + 1}${
                index + 1 === 3 || index + 1 === 4 ? '.png' : '.svg'
              }`}
            />
          }
          contentPosition="right"
        >
          <div className="section-content-card">
            <p>
              {info.text.split('/h')[0]}
              <strong>{info.text.split('/h')[1]}</strong>
              {info.text.split('/h')[2]}
            </p>
          </div>
        </ScrollytellingSection>
      ))}
    </Scrollytelling>
  );
};
```

Poderá utilizar tanto o `.map()`, como repetir o `<ScrollytellingSection />` para cada seção do seu scrollytelling.

#### O exemplo utilizado foi o de "Uma cifra, 500 mil vidas", publicado no dia 19/06/2021:

- [Link Produção](https://infograficos.oglobo.globo.com/sociedade/500-mil-covid.html?mobi=1)
- [Link do Repositório GitHub](https://github.com/edglobo/500-mil-covid)
