function showSection(sectionId){
   const Sections=document.querySelectorAll('.section')
   Sections.forEach(section => {
    section.style.display='none';
   })
  document.getElementById(sectionId).style.display='block'


}