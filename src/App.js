import React from 'react';
import './App.css';
import GenerateCard from './Components/GenerateCard/GenerateCard';
import AddClothes from './Components/AddClothes/AddClothes';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import {tShirtList, pantsList, hoodieList, accessoriesList, shortsList} from './Utils/constants.js'

function App() {
  const [isGenerateClothesPopupOpen, setGenerateClothesClick] = React.useState(false);
  const [isAddClothesPopupOpen, setAddClothesClick] = React.useState(false);

  function handleGenerateClothesClick() {
    setGenerateClothesClick(true);
  }

  function handleAddClothesClick() {
    setAddClothesClick(true);
  }

  function closeAllPopup() {
    setGenerateClothesClick(false);
    setAddClothesClick(false);
  }

  function handleAddItem(newClothes) {
    let arrayClothes = [tShirtList, pantsList, hoodieList, accessoriesList, shortsList];
    for(let i = 0; i<arrayClothes.length; i++){
      if(arrayClothes[i][0].category === newClothes.category){
        newClothes.id = arrayClothes[i].length + 1;
        arrayClothes[i].unshift(newClothes);
      }
    }
    setAddClothesClick(false);
  }
  
  return (
    <>
    <div className='container'>
      <Header></Header>
      <Main 
      onAddClothes={handleAddClothesClick}
      onGenerateClothes={handleGenerateClothesClick}
      ></Main>
      <GenerateCard
      isOpen={isGenerateClothesPopupOpen}
      onClose={closeAllPopup}
      ></GenerateCard>
      <AddClothes
      isOpen={isAddClothesPopupOpen}
      onClose={closeAllPopup}
      onAddItem={handleAddItem}
      ></AddClothes>
    </div>
      <Footer></Footer>
    </>
  );
}

export default App;
