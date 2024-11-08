import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';import UserProfile from './components/UserProfile';  // Importing UserProfile componentimport React from 'react';
import Header from './components/Header';  // Importing Header component
import MainContent from './components/MainContent';  // Importing MainContent component
import Footer from './components/Footer';  // Importing Footer component// Importing the WelcomeMessage component
import WelcomeMessage from './components/WelcomeMessage';

function App() {const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return ( <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
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
