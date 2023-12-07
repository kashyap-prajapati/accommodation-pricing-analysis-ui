import './App.css'
import { Route, Routes, useNavigate } from "react-router";
import Home from './Components/Home Page/Home';
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react"
import { OktaAuth } from "@okta/okta-auth-js"
import SearchPage from './Components/Search Page/SearchPage';


function App() {
  const history1 = useNavigate()
  const onAuthRequired = () => {
    history1('/');
  };

  const oktaAuth = new OktaAuth({
    issuer: 'https://dev-21501745.okta.com/oauth2/default',
    clientId: '0oa2yynmptDXcaobB5d7',
    redirectUri: 'http://localhost:5173/login/callback',
    postLogoutRedirectUri: 'http://localhost:5173',
    pkce: true,
    onAuthRequired: onAuthRequired,
    scopes: [
      "profile",
      "email",
      "openid",
    ]
  });

  const restoreOriginalUri = async () => {
    window.location.href = window.location.origin + '/search'
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
     <Routes>
        <Route path='/' element={<Home />} />
     </Routes>
     <Routes>
        <Route path='/search' element={<SearchPage/>} />
     </Routes>
     <Routes>
       <Route path='/login/callback' element={<LoginCallback/>}/>
     </Routes>
     </Security>
  )
}

export default App
