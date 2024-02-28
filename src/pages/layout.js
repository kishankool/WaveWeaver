    // components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Wave Weaver</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Wave Weaver</p>
      </footer>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }
        main {
          flex-grow: 1;
          padding: 1rem;
        }
        footer {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Layout;
