# Charms | Site

Site-vitrine da Charms para a Amostra Cultural. Não possui carrinho nem encomendas online.

## Como abrir
1. Extraia a pasta `charms-site`.
2. Abra `index.html` no navegador para visualizar.
3. Para editar, abra a pasta no VS Code.

## Como adicionar suas fotos
Copie suas fotos para `assets/images/` e use estes nomes:
- `hero.jpg` para a foto principal
- `chaveiros.jpg` para a foto dos chaveiros
- `phone-straps.jpg` para a foto dos phone straps
- `detalhes.jpg` para a foto da seção Sobre nós

No `index.html`, procure pelo nome do arquivo. Cada local tem um exemplo `<img>` comentado. Tire `<!--` e `-->` ao redor do `<img>` e remova o bloco `.placeholder-content` dentro daquele espaço para mostrar a foto. Exemplo:

```html
<div class="hero-photo">
  <img src="assets/images/hero.jpg" alt="Acessórios artesanais da Charms">
</div>
```

Se a foto estiver em PNG, altere a extensão no `src`, por exemplo `hero.png`.

## Como mudar informações
- Preços: procure por `R$ 7,50` no `index.html`.
- Endereço: seção `id="local"` no `index.html`.
- Cores: variáveis no início do `style.css`.
- Link de Instagram: procure por `instagram-link` no `index.html` e troque o link pelo perfil correto da Charms.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie os arquivos de dentro desta pasta para a raiz do repositório.
3. Abra Settings → Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Selecione `main` e `/ (root)`, depois Save.
6. Aguarde o GitHub gerar o endereço público do site.
