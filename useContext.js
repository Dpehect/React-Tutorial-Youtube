import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState({
    backgroundColor: 'lightblue',
    color: 'white'
  });

  const toggleTheme = () => {
    setTheme(theme => ({
      backgroundColor: theme.backgroundColor === 'lightblue' ? 'white' : 'lightblue',
      color: theme.color === 'white' ? 'black' : 'white'
    }));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <Main />
        <Button onClick={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header style={theme}>
      <h1>Header</h1>
    </header>
  );
}

function Main() {
  const theme = useContext(ThemeContext);

  return (
    <main style={theme}>
      <p>This is the main content</p>
    </main>
  );
}

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Change Theme
    </button>
  );
}

export default App;
