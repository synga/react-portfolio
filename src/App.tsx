import { Component } from 'react';

import Header from './sections/Header/Header';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

class App extends Component {
  state = {
    projects: null,
  };

  componentWillMount() {
    fetch('https://portfolio-gabriel-barreto.firebaseio.com/Projetos.json')
      .then((resp) => resp.json())
      .then((resp) => {
        const projects = Object.values(resp).sort(
          (a: any, b: any) => a.ordem - b.ordem
        );

        this.setState({
          ...this.state,
          projects,
        });
      });
  }

  render() {
    return (
      <main>
        <Header />
        <About />
        {this.state.projects && <Projects projects={this.state.projects} />}
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default App;
