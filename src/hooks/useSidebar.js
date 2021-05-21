import {useState, useEffect, useCallback} from 'react';

const useSidebar = () => {

    const SidebarContentDefault = () => {
        return <div></div>
    }

    const [wlasnosci, ustawWlasnosci] = useState({
        sidebarTitle: '',
        sidebarContent: () => <SidebarContentDefault/>,
        widoczny: false
    });

    const { widoczny } = wlasnosci;

    const sidebarUpdate = useCallback(( klucz, wartosc ) => {
        if(klucz in wlasnosci){
        wlasnosci[klucz] = wartosc;
        ustawWlasnosci({...wlasnosci});
        }
    }, []);

    const toggleView = () => {
        document.body.classList.toggle('unscroll');
        sidebarUpdate('widoczny', !wlasnosci.widoczny);
    };

    useEffect(() => {
        // Czyszczenie zawartości sidebara, gdy zostaje schowany
        if( widoczny === false ){
        sidebarUpdate('setSidebarContent', () => SidebarContentDefault);
        }
    }, [widoczny, sidebarUpdate]);

    return { wlasnosci,
            toggleView, 
            sidebarUpdate
            };

}

export {useSidebar};