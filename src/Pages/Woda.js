import { Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';
import PokazUstawienia from '../Components/UstawieniaWrap';

import {Ustawienia_woda_pv} from '../Components/UstawieniaWraps';

export default function Woda(){
    return (
        <>

        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Zarządzanie wodą</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">
              
              <Zakladka nazwa="Wartość zadana" wartosc="000">
                <p>Ustalony poziom wilgotności gleby</p>
                <PokazUstawienia tytul="Zmiana wartości zadanej wilgotności gleby" komponent={<Ustawienia_woda_pv />} />
              </Zakladka>
              <Zakladka nazwa="Histereza" wartosc="000">
                <p>Zakres wahań wokół wartości zadanej</p>
                <PokazUstawienia tytul="Zmiana histerezy" komponent={<Ustawienia_woda_pv />} />
              </Zakladka>
              <Zakladka nazwa="Włączenie pompy">
                <div className="d-flex flex-row">
                    <div>Wł</div>
                    <div className="mx-3">
                    <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange="" />
                    </div>
                    </div>
                    <div>Wył</div>
                </div>
                <p>Zmiana stanu pracy pompy</p>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
}