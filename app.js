document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById('introScreen');
  const messageScreen = document.getElementById('messageScreen');
  const infoScreen = document.getElementById('infoScreen');
  const locationInfoElement = document.getElementById('locationInfo');
  const currentTimeElement = document.getElementById('currentTime');

  let currentScreen = introScreen;

  const updateCurrentTime = () => {
    const now = new Date();
    const timeOptions = { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString([], timeOptions);
    currentTimeElement.textContent = formattedTime;
  };

  const fetchUserLocation = () => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        locationInfoElement.textContent = `${data.city}, ${data.region}`;
      })
  };

  const transitionToNextScreen = () => {
    if (currentScreen === introScreen) {
      transitionScreens(introScreen, messageScreen);
    } else if (currentScreen === messageScreen) {
      transitionScreens(messageScreen, infoScreen);
      fetchUserLocation(); 
    }
  };

  const transitionScreens = (current, next) => {
    current.classList.remove('active');
    next.classList.add('active');
    currentScreen = next;
  };

  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

  document.body.addEventListener('click', transitionToNextScreen);
});
