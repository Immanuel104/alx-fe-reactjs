import UserProfile from './components/UserProfile';  // Importing UserProfile componentimport React from 'react';
import Header from './components/Header';  // Importing Header component
import MainContent from './components/MainContent';  // Importing MainContent component
import Footer from './components/Footer';  // Importing Footer component// Importing the WelcomeMessage component
import WelcomeMessage from './components/WelcomeMessage';

function App() {
    return (
        <div>
           <Header />           {/* Including Header component */}
            <MainContent />      {/* Including MainContent component */}
               <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />  {/* Using UserProfile component */}
            <Footer />           {/* Including Footer component */}
            <WelcomeMessage />
        </div>
    );
}

export default App;
