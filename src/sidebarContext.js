import { createContext } from 'react';

const sidebarContext = createContext({
    wlasnosci: {
        sidebarTitle: '',
        sidebarContent: () => {
            return <div></div>
        },
        widoczny: false
    },
    sidebarUpdate: () => {},
    toggleView: () => {},
});

export default sidebarContext;