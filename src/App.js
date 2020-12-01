import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NotesList from './NotesList/NotesList';
import NotePage from './NotePage/NotePage';
import './App.css';
import DATA from './Dummy-data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      notes: [],
    }
  }
  
  componentDidMount() {
    this.setState(DATA)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to='/'>Noteful</Link>
          </h1>
        </header>
        <main>
          <Route
              exact
              path='/'
              render={() =>
              <NotesList
                noteData={this.state.notes}
              />}
            />
          <Route
            path='/note/:noteID'
            render={() =>
            <NotePage
              notePageData={this.state.notes}
            />}
          />
        </main>
        <section className="sidebar">
          <Route
            path='/'
            render={() =>
            <Sidebar
              folderData={this.state.folders}
            />}
          />
        </section>
      </div>
    );
  }
}

export default App;
