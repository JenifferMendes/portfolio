# to do list

05/02
- [x] quando escolher a "pagina" no menu, o menu sumir
- [x] criar um botão para ir pra cima
- [x] criar um botão para o link do site e um do repositorio no github
- [x] efeito de scroll
- [x] tech no about
- [x] colocar os botoes embaixo do texto.

06/02
- [x] bug do tablet
- [x] colocar sombra nos botoes dos links nos projetos
- [x] centralizar o texto do welcome
- [x] arrumei o card do projeto/imagens - ta resposivo até 320px(do inspect)
- [x] titulos arrumados


07/02
- [x] arrumar o bug dos links dos contatos
- [x] media query - tablet
  - [x] home
  - [x] sobre
  - [x] projetos
  - [x] contato
- [x] media query - pc/telas grandes
  - [x]  home
  - [x] sobre
  - [x] projetos
  - [x] contato
- [x] arrumar o contato css.

08/02
- [x] arrumar padding dos card
- [x] foto da koiziny no contatos - não vai ter
- [x] imagens pro iphone
- [x] arrumar titulo do tecnologia no about (ver o mobile) - so para o menorzinho.
- [x] no "hover/active" das fotos
- [x] efeito nos itens do menu
- [x] form funcionando

09/02 
- [x] colocar textinhos bonitinhos nas descrições das coisas.
- [x] criar o elemento para selecionar os idiomas no perfil.

10/02
- [x] separar o css :'(
- [x] problema para resolver na escolha dos idiomas no pc
- [x] decidir se crio um slider pra todos os projetos(não vou usar)
- [x] problema para resolver na escolha dos idiomas no mobile/tablet


11/02
- [x] arrumar tamanho do menu.
- [ ] componentizar os elementos.
- [ ] arrumar tamanho das imagens.
- [ ] arrumar escolha de idiomas pro iphone :clown:



---- 
```javascript
const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
const platform = window.navigator.userAgent;
console.log(platform)

if (platform.match(iosPlatforms)) {
    alert("é burgues safado");
} else {
    alert("oi pessoa feliz");
    // koihi.style.backgroundAttachment = "none";
    // teste.style.background = "#FFFFFF";
}
```
