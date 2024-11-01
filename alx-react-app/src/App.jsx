import React from 'react';
import Header from './components/Header';  // Importing Header component
import MainContent from './components/MainContent';  // Importing MainContent component
import Footer from './components/Footer';  // Importing Footer component// Importing the WelcomeMessage component
import WelcomeMessage from './components/WelcomeMessage';

function App() {
    return (
        <div>
           <Header />           {/* Including Header component */}
            <MainContent />      {/* Including MainContent component */}
            <Footer />           {/* Including Footer component */}
            <WelcomeMessage />
        </div>
    );
}

export default App;
