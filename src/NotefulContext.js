import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    deleteFolder: () => {},
})

export default NotefulContext;