import React from "react"
import Header from './components/header'
import About from './components/about'
import Education from './components/education'
import Experience from './components/experience'
import Footer from './components/footer'



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
