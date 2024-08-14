import Header from './components/Header.jsx';
import Homepage from './components/Hompage.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css'

function App() {
 return(
    <>
    <Header/>
    <main>
<Homepage />
<About />
<Skills />
<Projects />
<Contact />
    </main>
    </>
    
 )
}

export default App
