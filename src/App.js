import React from 'react';
import './App.css';
import GenerateCard from './Components/GenerateCard/GenerateCard';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  const [isGenerateClothesPopupOpen, setGenerateClothesClick] = React.useState(false);

  function handleGenerateClothesClick() {
    setGenerateClothesClick(true);
  }

  function closeAllPopup() {
    setGenerateClothesClick(false);
  }
  
  return (
    <>
    <div className='container'>
      <Header></Header>
      <Main 
      onGenerateClothes={handleGenerateClothesClick}
      ></Main>
      <GenerateCard
      isOpen={isGenerateClothesPopupOpen}
      onClose={closeAllPopup}
      ></GenerateCard>
    </div>
      <Footer></Footer>
    </>
  );
}

export default App;
