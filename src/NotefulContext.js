import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    deleteFolder: () => {},
    deleteNote: () => {},
})

export default NotefulContext;