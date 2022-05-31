import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../Login/LoginPage';

function Router() {

  const baseUrl = "";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginPage
            baseUrl={baseUrl} />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router;