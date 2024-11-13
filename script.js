document.addEventListener("DOMContentLoaded", function() {
    const lights = document.querySelectorAll('.light');
    const messageBox = document.querySelector('.message-box');
    const messageText = document.querySelector('.message');
  
    let currentLightIndex = 0;
  
    function changeLight() {
      switch (currentLightIndex) {
        case 0:
          messageText.textContent = "Stop Please ";
          setTimeout(() => {
            messageText.textContent = "Be Ready Guyzzz";
            lights[currentLightIndex].classList.remove('active');
            currentLightIndex = (currentLightIndex + 1) % lights.length;
            lights[currentLightIndex].classList.add('active');
            setTimeout(changeLight, 3000);
          }, 5000);
          break;
        case 1:
          messageText.textContent = "Be Ready Guyzzz";
          setTimeout(() => {
            messageText.textContent = "Lets Go";
            lights[currentLightIndex].classList.remove('active');
            currentLightIndex = (currentLightIndex + 1) % lights.length;
            lights[currentLightIndex].classList.add('active');
            setTimeout(changeLight, 10000);
          }, 3000);
          break;
        case 2:
          messageText.textContent = "Lets Go";
          setTimeout(() => {
            messageText.textContent = "Stop Please";
            lights[currentLightIndex].classList.remove('active');
            currentLightIndex = (currentLightIndex + 1) % lights.length;
            lights[currentLightIndex].classList.add('active');
            setTimeout(changeLight, 5000);
          }, 10000);
          break;
      }
      lights[currentLightIndex].classList.add('active');
    }
  
    function startTrafficLight() {
      setTimeout(changeLight, 5000);
    }
  
    startTrafficLight();
  });
  