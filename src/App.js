import React from "react"
import Header from './components/header'
import About from './components/about'
import Education from './components/education'
import Experience from './components/experience'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Resume Website">
      <Header />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
