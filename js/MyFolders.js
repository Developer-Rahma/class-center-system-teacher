const gridViewButton = document.getElementById('gridView');
const flexViewButton = document.getElementById('flexView');

gridViewButton?.addEventListener('click', () => {
const content = document.querySelector('.MyFoldersContent');
content.classList.add('GridView');
content.classList.remove('FlexView');
  gridViewButton.classList.add('active');
  flexViewButton.classList.remove('active');

});

flexViewButton?.addEventListener('click', () => {
    const content = document.querySelector('.MyFoldersContent');
    content.classList.add('FlexView');
    content.classList.remove('GridView');
  flexViewButton.classList.add('active');
  gridViewButton.classList.remove('active');
 
});