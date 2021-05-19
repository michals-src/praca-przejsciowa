import { Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';
import PokazUstawienia from '../Components/UstawieniaWrap';

import {Ustawienia_tryb_pracy} from '../Components/UstawieniaWraps';

export default function Swiatlo(){
    return (
        <>

        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Zarządzanie światłem</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">
              
              <Zakladka nazwa="Tryb pracy" wartosc="#tryb pracy">
                <p>Wybór pomiędzy automatycznym i ręcznym sterowaniem układu</p>
                <PokazUstawienia tytul="Zmiana trybu pracy" komponent={<Ustawienia_tryb_pracy />} />
              </Zakladka>
              <Zakladka nazwa="Wilgotnosc gleby" wartosc="000">
                <p>Wartość wilgotności w gleby w miejscu położenia czujnika</p>
                  <Link to="/woda" className="icon-link">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </span>
                    Ustawienia
                  </Link>
              </Zakladka>
              <Zakladka nazwa="Natężenie światła" wartosc="000">
                <p>Aktualna wartość, która jest odczytana przez czujnik</p>
                <Link to="/swiatlo" className="icon-link">
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                      </svg>
                  </span>
                  Ustawienia
                </Link>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
}