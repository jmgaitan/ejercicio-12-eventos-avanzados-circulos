let page = document.body;
let tematicPage = document.createElement('span');
tematicPage.textContent = ' Temática elegida: SPA ';
let iconPage = document.createElement('img');
iconPage.setAttribute('src', './estilo/images/logo.svg');
iconPage.setAttribute('alt', 'magotipo de EducacionIT a color');
iconPage.setAttribute('width','166')
iconPage.setAttribute('height','26')
page.append(iconPage);
page.append(tematicPage);
