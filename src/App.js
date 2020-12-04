import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NotesList from './NotesList/NotesList';
import NotePage from './NotePage/NotePage';
import MainFolders from './MainFolders/MainFolders';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      notes: [],
      selectedNotes: []
    }
  }

  
  componentDidMount() {
    fetch('http://localhost:9090/folders', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(folders => this.setState({folders: folders}))
    .catch(error => this.sestState( {error}));

    fetch('http://localhost:9090/notes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(notes => this.setState({notes: notes}))
    .catch(error => this.sestState( {error}));
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      selectedNotes: this.state.notes,
      deleteNote: this.handleDeleteNote
    }

    return (
      <NotefulContext.Provider value={contextValue}>
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
                component={NotesList}
              />
            <Route
              path='/note/:noteID'
              component={NotePage}
            />
            <Route
              path='/folder/:folderID'
              component={MainFolders}
            />
          </main>
          <section className="sidebar">
            <Route
              path='/'
              component={Sidebar}
            />
            
          </section>
        </div>
      </NotefulContext.Provider>         
    );
  }
}

export default App;
