function updateActiveStep(stepId) {
    
    document.querySelectorAll('.step').forEach(step => {
      step.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
  }


document.getElementById('createClassBtn')?.addEventListener('click', () => {
    document.getElementById('FormClass').style.display = 'none';
    document.getElementById('AddClassId').style.display = 'flex';
    updateActiveStep('step2');
  });

document.getElementById('continueBtn')?.addEventListener('click', () => {
    document.getElementById('AddClassId').style.display = 'none';
    document.getElementById('FinalStep').style.display = 'block';
    updateActiveStep('step3');
  });
document.getElementById('Back')?.addEventListener('click',() => {
    document.getElementById('FinalStep').style.display = 'none';
    document.getElementById('AddClassId').style.display = 'flex';
})