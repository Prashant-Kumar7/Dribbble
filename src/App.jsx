import { CardPage } from "./pages/CardPage"
import { ProfilePage } from "./pages/ProfilePage"
import { Signup } from "./pages/Signup"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Verify } from "./pages/VerifyPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />
          <Route path="/card/:userId" element={<CardPage/>} />
          <Route path="/verify/:userId" element={<Verify/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
