import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import GenerateCard from '../GenerateCard/GenerateCard.js';
import AddClothes from '../AddClothes/AddClothes';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from "../Profile/Profile";
import Footer from '../Footer/Footer';
import LogOut from "../LogOut/LogOut";
import {tShirtList, pantsList, hoodieList, accessoriesList, shortsList} from '../../Utils/constants.js'

function Home () {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [isGenerateClothesPopupOpen, setGenerateClothesClick] = React.useState(false);
  const [isAddClothesPopupOpen, setAddClothesClick] = React.useState(false);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

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
      <Header
      children={<LogOut
        logOut={logout}
      ></LogOut>}
      ></Header>
      <Profile
      name={name}
      ></Profile>
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

export default Home;
