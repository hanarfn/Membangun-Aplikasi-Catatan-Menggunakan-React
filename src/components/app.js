import { Component } from 'react';
import autoBind from 'auto-bind';
import { getInitialData } from '../utils/index';
import Input from './input';
import List from './list';
import Header from './header';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: getInitialData(),
         query: '',
      }
      autoBind(this);
   }
   onDeleteEventHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
   }
   onArchiveEventHandler(id) {
      const archives = [...this.state.notes];
      const index = this.state.notes.findIndex(note => note.id === id);
      archives[index].archived = archives[index].archived ? false : true;
      this.setState({ notes: archives });
   }
   onAddNoteEventHandler({ title, body }) {
      this.setState((prevState) => {
         return {
            notes: [
               ...prevState.notes,
               {
                  id: +new Date(),
                  title,
                  body,
                  createdAt: new Date().toISOString(),
                  archived: false,
               }
            ]
         }
      });
   }
   onSearchNoteEventHandler(query) {
      this.setState(() => {
         return {
            query: query
         }
      })
   }
   render() {
      return (
         <div className="note">
            <Header onSearch={this.onSearchNoteEventHandler} />
            <Input addNote={this.onAddNoteEventHandler} />
            <h2>List Notes</h2>
            <List key={'unarchived-notes'} query={this.state.query} notes={this.state.notes} onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} />
            <h2>Notes Archived</h2>
            <List key={'archived-notes'} query={this.state.query} notes={this.state.notes} onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} isArchived={true} />
         </div>
      );
   }
}

export default App;