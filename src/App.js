import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalTable from './pages/AnimalTable';
import Menu from './components/menu/Menu';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import './styles/global.scss';
import axios from 'axios';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './pages/home/Home';
import RequireAuth from './components/RequireAuth';
import SignupPage from './components/signup/SignupPage';
import LogoutPage from './pages/logout/LogoutPage';
import FeedPage from './pages/feedPage/FeedPage';
import MatingPage from './pages/matingPage/MatingPage';
import QuarantinePage from './pages/quarantinePage/QuarantinePage';
import VaccinationPage from './pages/vaccinationPage/VaccinationPage';
import DiseasePage from './pages/disease/DiseasePage';
import MedicationPage from './pages/medicationPage/MedicationPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import { ChakraProvider } from '@chakra-ui/react';
import Chat from './components/chat/Chat';

const Layout = () => {
  return (
    <div className="mainSection">
      <Navigation />
      <div className="midSection">
        <div className="menuSection">
          <Menu />
        </div>
        <div className="contentSection">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

//change;
export const makeApiRequest = async (url, method, data = null) => {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        // element={
        //   <RequireAuth>
        //     <Layout />
        //   </RequireAuth>
        // }
        element={<Layout />}
      >
        <Route path="/" element={<Home />} />
        <Route path="animals" element={<AnimalTable />} />
        <Route path="mating" element={<MatingPage />} />
        <Route path="disease" element={<DiseasePage />} />
        <Route path="quarantine" element={<QuarantinePage />} />
        <Route path="vaccination" element={<VaccinationPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="meds" element={<MedicationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
    </>
  )
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <Chat />
    </ChakraProvider>
  );
}
export default App;
