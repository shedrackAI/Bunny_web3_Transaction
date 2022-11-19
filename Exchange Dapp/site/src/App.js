import { Transactions, Navbar, Footer, Services, Welcome, Loader } from './components/exports';
import './App.css';

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
