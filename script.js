
    document.querySelectorAll('.recipe-card').forEach(card => {
      const toggleIngredients = card.querySelector('.toggleIngredients');
      const toggleSteps = card.querySelector('.toggleSteps');
      const startCooking = card.querySelector('.startCooking');
      const nextStep = card.querySelector('.nextStep');
      const ingredients = card.querySelector('.ingredients');
      const steps = card.querySelector('.steps');
      const stepsList = card.querySelectorAll('.stepsList li');
      const progress = card.querySelector('.progress');
      let currentStep = -1;

      const updateStepUI = () => {
        stepsList.forEach(step => step.removeAttribute('data-active'));
        if (currentStep >= 0 && currentStep < stepsList.length) {
          stepsList[currentStep].setAttribute('data-active', 'true');
        }
        const progressWidth = ((currentStep + 1) / stepsList.length) * 100;
        progress.style.width = `${progressWidth}%`;
        nextStep.textContent = currentStep === stepsList.length - 1 ? "Finish & Enjoy!" : "Next Step";
      };

      toggleIngredients.addEventListener('click', () => {
        ingredients.classList.toggle('hidden');
        toggleIngredients.textContent = ingredients.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
      });

      toggleSteps.addEventListener('click', () => {
        steps.classList.toggle('hidden');
        toggleSteps.textContent = steps.classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
      });

      startCooking.addEventListener('click', () => {
        if (steps.classList.contains('hidden')) {
          steps.classList.remove('hidden');
          toggleSteps.textContent = 'Hide Steps';
        }
        nextStep.style.display = 'block';
        currentStep = 0;
        updateStepUI();
      });
      

      nextStep.onclick = () => {
        if (currentStep < stepsList.length - 1) {
          stepsList [currentStep].style.background = 'transparent';
          currentStep++;
          stepsList[currentStep].style.background = '#ffe2e2';
          progress.style.width = `${((currentStep + 1) / stepsList.length)*100}%`;
        } 
        else if (currentStep === stepsList.length - 1) {
          updateStepUI();
          alert('Cooking complete! Enjoy your delicious creation 🍰');
          nextStep.style.display = 'none';
          currentStep = stepsList.length;
        }
        else {
          alert('Recipe finished! Click "Start Cooking" to begin again.');
          }
      };

      
    });
          
