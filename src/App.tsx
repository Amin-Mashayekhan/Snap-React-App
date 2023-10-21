import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
import DeleteForm from './components/forms/DeleteForm';
import FormPage from './pages/FormPage';
// import Heading from './components/Heading';
import LoginForm from './components/forms/LoginForm';
import Logout from './components/Logout';
import MatrixPage from './pages/MatrixPage';
// import PostForm from './components/forms/PostForm';
import Posts from './components/Posts';
import SocialPage from './pages/SocialPage';
// import { UserContext } from './contexts/UserProvider';
import UserForm from './components/forms/UserForm';
import UserPage from './pages/UserPage';
import Users from './components/Users';

// import { useContext } from 'react';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      {/* <Heading />
        <FormPage>
          <PostForm/>
        </FormPage> */}
      <Routes>
        <Route path='/' element={<MatrixPage />} />
        <Route path='/users' element={<SocialPage><Users /></SocialPage>} />
        <Route path='/register' element={<FormPage>
          <UserForm edit={false} />
        </FormPage>} />
        <Route path='/login' element={<FormPage>
          <LoginForm />
        </FormPage>} />
        <Route path='/edit-user' element={<FormPage>
          <UserForm edit />
        </FormPage>} />
        <Route path='/delete-user' element={<FormPage>
          <DeleteForm />
        </FormPage>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='/feed' element={<SocialPage><Posts username={false} /></SocialPage>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
