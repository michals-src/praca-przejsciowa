import { Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';
import PokazUstawienia from '../Components/UstawieniaWrap';

import {Ustawienia_tryb_pracy} from '../Components/UstawieniaWraps';

export default function Home(){
    return (
        <>

        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Podgląd parametrów</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">
              
              <Zakladka nazwa="Tryb pracy" wartosc="#tryb pracy">
                <p>Wybór pomiędzy automatycznym i ręcznym sterowaniem układu</p>
                <PokazUstawienia tytul="Zmiana trybu pracy" komponent={<Ustawienia_tryb_pracy />} />
              </Zakladka>
              <Zakladka nazwa="Wilgotnosc gleby" wartosc="000">
                <p>Wartość wilgotności w gleby w miejscu położenia czujnika</p>
              </Zakladka>
              <Zakladka nazwa="Natężenie światła" wartosc="000">
                <p>Aktualna wartość, która jest odczytana przez czujnik</p>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
}