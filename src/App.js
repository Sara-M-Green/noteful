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
            render={(props) =>
            <NotePage
              {...props}
              notePageData={this.state.notes}
            />}
          />
          <Route
            path='/folder/:folderID'
            render={(props) =>
            <MainFolders
              {...props}
              FolderNotes={this.state.notes}
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
