import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
import DeleteForm from './components/forms/DeleteForm';
// import Heading from './components/Heading';
import LoginForm from './components/forms/LoginForm';
import Logout from './components/Logout';
import MatrixPage from './pages/MatrixPage';
// import PostForm from './components/forms/PostForm';
import Posts from './components/Posts';
// import { UserContext } from './contexts/UserProvider';
import UserForm from './components/forms/UserForm';
import UserPage from './pages/UserPage';
import Users from './components/Users';
import { useContext } from 'react';
import { UserContext } from './contexts/UserProvider';
import Body from './components/Body';
import Country from './pages/Country';

// import { useContext } from 'react';
function App(): JSX.Element {
  const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      {/* <Heading />
        <FormPage>
          <PostForm/>
        </FormPage> */}
      <Routes>
        <Route path='/' element={
          user.token ? (
            <MatrixPage />
          ) : (
            <Body />
          )
        }
        />
        <Route path='/register' element={
          <Body sidebar>
            <UserForm edit={false} />
          </Body>
        } />
        <Route path='/login' element={
          <Body sidebar>
            <LoginForm />
          </Body>
        } />
        {
          user.token && (
            <>
              <Route path='/users' element={
                <Body sidebar>
                  <Users />
                </Body>
              } />
              {/* <Route path='/edit-user' element={
                <Body sidebar>
                <UserForm edit />} />
                </Body>
                */}
              <Route path='/delete-user' element={
                <Body sidebar>
                  <DeleteForm />
                </Body>
              } />
              <Route path='/logout' element={
                <Body sidebar>
                  <Logout />
                </Body>
              } />
              <Route path='/user/:username' element={
                <Body sidebar>
                  <UserPage />
                </Body>
              } />
              <Route path='/feed' element={
                <Body sidebar>
                  <Posts username={false} />
                </Body>
              } />
              <Route path='/country' element={
                <Body sidebar>
                  <Country />
                </Body>
              } />
              <Route path='*' element={
                <Body sidebar>
                  <Navigate to='/' />
                </Body>
              } />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
