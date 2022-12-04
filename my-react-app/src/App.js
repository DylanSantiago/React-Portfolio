import logo from './logo.svg';
import './App.css';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';

export default function App() {
  return(
    <main>
      <Nav />
      <Me />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  )
}
