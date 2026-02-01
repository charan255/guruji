import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import BackButton from './components/BackButton';
import UserProfile from './components/UserProfile';
import Simulation from './components/Simulation';
import Recommendations from './components/Recommendations';
import CareerDetails from './components/CareerDetails';
import CareerComparison from './components/CareerComparison';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [screenHistory, setScreenHistory] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);

  // Helper to change screen and push to history
  const navigateTo = (screen) => {
    setScreenHistory(prev => [...prev, currentScreen]);
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    if (screenHistory.length > 0) {
      const prevScreen = screenHistory[screenHistory.length - 1];
      setScreenHistory(prev => prev.slice(0, -1));
      setCurrentScreen(prevScreen);
    } else {
      // Fallback if no history (e.g. reload), go to recommendations or landing
      setCurrentScreen(currentScreen === 'profile' ? 'landing' : 'recommendations');
    }
  };

  const startApp = () => navigateTo('profile');

  const completeProfile = (data) => {
    setUserData(data);
    navigateTo('recommendations');
  };

  const completeSimulation = () => {
    navigateTo('recommendations');
  };

  const selectCareer = (career) => {
    setSelectedCareer(career);
    navigateTo('details');
  };

  const goToComparison = () => {
    navigateTo('comparison');
  };

  const goBackToRecommendations = () => {
    // This function used to be manual explicit back, now we can use generic back or keep explicit
    // For compatibility with child components expecting onBack, we can just use handleBack
    handleBack();
  };

  const startSimulation = (career) => {
    setSelectedCareer(career);
    navigateTo('simulation');
  };

  return (
    <>
      {currentScreen !== 'landing' && <BackButton onBack={handleBack} />}

      {currentScreen === 'landing' && <LandingPage onStart={startApp} />}
      {currentScreen === 'profile' && <UserProfile onComplete={completeProfile} />}
      {currentScreen === 'simulation' && <Simulation career={selectedCareer} onComplete={completeSimulation} />}
      {currentScreen === 'recommendations' && <Recommendations userProfile={userData} onSelectCareer={selectCareer} onSimulate={startSimulation} onCompare={goToComparison} />}
      {currentScreen === 'details' && <CareerDetails career={selectedCareer} onSimulate={startSimulation} onBack={handleBack} />}
      {currentScreen === 'comparison' && <CareerComparison onBack={handleBack} />}
    </>
  );
}

export default App;
