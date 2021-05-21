import React, {useContext} from 'react';

import sidebarContext from '../sidebarContext';

export default function Sidebar() {

    const { wlasnosci, toggleView } = useContext(sidebarContext);
    const { sidebarTitle, sidebarContent, widoczny } = wlasnosci;
    const cn = (widoczny) ? 'widac' : '';

    return (
        <div className={`ustawienia-wrap ` + cn} aria-hidden={widoczny}>
            <div className="row">
            <div className="col-2">
                <button className="btn btn-plain" onClick={toggleView}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                </button>
            </div>
            <div className="col-10"><h4>{sidebarTitle}</h4></div>
            </div>
            <div>
            {sidebarContent !== null ? sidebarContent : null}
            </div>
        </div>
    )
}

const UstawieniaPrzycisk = ({ tytul, komponent }) => {
    
    const { sidebarUpdate, toggleView, wlasnosci } = useContext(sidebarContext);

    const handleView = ( btnClickedAgain ) => {
        if( wlasnosci.widoczny === false && btnClickedAgain === true ){
            toggleView();
        }
    }

    return (
        <>
        <button className="btn btn-plain icon-link" onClick={() => {
            
            sidebarUpdate( 'sidebarTitle', tytul );
            sidebarUpdate( 'sidebarContent', komponent );
           
            handleView(true);
        }}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </span>
            Ustawienia
        </button>
        </>
    );
}

export { UstawieniaPrzycisk };