import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LessonPage from "./components/LessonPage.jsx";


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      
      <Router>
        <Routes>
        <Route exact path="/*" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />}/>
        
          <Route exact path="/lessonpage" element={<LessonPage />} />

          
        </Routes>
      </Router>
    




    </div>
  )
}

export default App