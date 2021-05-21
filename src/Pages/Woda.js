import { useState, useEffect } from 'react';

import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';

import { useSelector } from 'react-redux';
import { selectParams } from '../parametry/parametrySlice';

import firebase from 'firebase/app';
import 'firebase/database';

import {UstawieniaPrzycisk} from '../Components/Sidebar';
import {Ustawienia_woda_pv, UstawieniaWodaHist} from '../Components/UstawieniaWraps';


export default function Woda(){

    const { tryb_pracy, woda_pv, woda_his, woda_switch } = useSelector(selectParams);
    const [ switch1, setSwitch1 ] = useState(woda_switch);

    useEffect(() => {
      if( switch1 !== "undefined" ){
        firebase.database().ref('woda_switch').set(Boolean(switch1), (err) => {
            if( err !== null ) console.log(err);
        });
      }
    }, [switch1]);

    return (
        <>

        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Zarządzanie wodą</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">
              
              <Zakladka nazwa="Wartość zadana" wartosc={woda_pv}>
                <p>Ustalony poziom wilgotności gleby</p>
                <UstawieniaPrzycisk tytul="Zmiana wartości zadanej wilgotności gleby" komponent={<Ustawienia_woda_pv />} />
              </Zakladka>
              <Zakladka nazwa="Histereza" wartosc={woda_his}>
                <p>Zakres wahań wokół wartości zadanej</p>
                <UstawieniaPrzycisk tytul="Zmiana histerezy" komponent={<UstawieniaWodaHist />} />
              </Zakladka>
              <Zakladka nazwa="Włączenie pompy">
                <div className="d-flex flex-row">
                    <div>Wł</div>
                    <div className="mx-3">
                    <div className="form-check form-switch ml-auto">
                        <input disabled={tryb_pracy} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={switch1} checked={switch1} onChange={ () => setSwitch1(!switch1) } />
                    </div>
                    </div>
                    <div>Wył</div>
                </div>
                { tryb_pracy === true && (<p className="mb-1 form-text text-danger">Opcja nieaktywna z powodu automatycznego trybu pracy układu</p>) }
                <p>Zmiana stanu pracy pompy</p>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
}