import './App.css';
import { Button } from '@/components/ui/button';

function App() {
  const appName = import.meta.env.VITE_APP_NAME;
  const mode = import.meta.env.MODE;

  return (
    <>
      <h1>
        {appName} ({mode})
      </h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
