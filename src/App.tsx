import './App.css';

function App() {
  const appName = import.meta.env.VITE_APP_NAME;
  const mode = import.meta.env.MODE;

  return (
    <>
      <h1>
        {appName} ({mode})
      </h1>
    </>
  );
}

export default App;
