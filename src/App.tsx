import AppRouter from './App.Routing';
import './App.css';
import { Status } from './interfaces/IAuth';

function App() {
  const isAuthenticated: Status = 'authenticated'; // Have to develop the check authentication logic here 
  return (
    <AppRouter status={isAuthenticated}></AppRouter>
  );
}

export default App;
