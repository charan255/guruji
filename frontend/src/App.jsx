import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import Simulation from './components/Simulation';
import Recommendations from './components/Recommendations';
import CareerDetails from './components/CareerDetails';
import CareerComparison from './components/CareerComparison';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [userData, setUserData] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const startApp = () => setCurrentScreen('profile');

  const completeProfile = (data) => {
    setUserData(data);
    setCurrentScreen('recommendations');
  };

  const completeSimulation = () => {
    setCurrentScreen('recommendations');
  };

  const selectCareer = (career) => {
    setSelectedCareer(career);
    setCurrentScreen('details');
  };

  const goToComparison = () => {
    setCurrentScreen('comparison');
  };

  const goBackToRecommendations = () => {
    setSelectedCareer(null);
    setCurrentScreen('recommendations');
  };

  const startSimulation = (career) => {
    setSelectedCareer(career);
    setCurrentScreen('simulation');
  };

  return (
    <>
      {currentScreen === 'landing' && <LandingPage onStart={startApp} />}
      {currentScreen === 'profile' && <UserProfile onComplete={completeProfile} />}
      {currentScreen === 'simulation' && <Simulation career={selectedCareer} onComplete={completeSimulation} />}
      {currentScreen === 'recommendations' && <Recommendations userProfile={userData} onSelectCareer={selectCareer} onSimulate={startSimulation} onCompare={goToComparison} />}
      {currentScreen === 'details' && <CareerDetails career={selectedCareer} onSimulate={startSimulation} onBack={goBackToRecommendations} />}
      {currentScreen === 'comparison' && <CareerComparison onBack={goBackToRecommendations} />}
    </>
  );
}

export default App;
