import React from react
import { createRoot } from react-dom/client
import { BrowserRouter, Routes, Route } from react-router-dom
import ./index.css
import App from ./pages/App
import Landing from ./pages/Landing
import Login from ./pages/Login
import Register from ./pages/Register
import Dashboard from ./pages/Dashboard
import Account from ./pages/Account
import Tickets from ./pages/Tickets

createRoot(document.getElementById(root)!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> 
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
