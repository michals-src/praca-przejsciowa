import { useState, useEffect } from 'react';

import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';

import { useSelector } from 'react-redux';
import { selectParams } from '../parametry/parametrySlice';

import firebase from 'firebase/app';
import 'firebase/database';

import {UstawieniaPrzycisk} from '../Components/Sidebar';
import {UstawieniaSwiatloPV} from '../Components/UstawieniaWraps';

export default function Swiatlo(){

  const { tryb_pracy, swiatlo_pv, swiatlo_switch } = useSelector(selectParams);
  const [ switch1, setSwitch1 ] = useState(swiatlo_switch);

  useEffect(() => {
    if( switch1 !== "undefined" ){
      firebase.database().ref('swiatlo_switch').set(Boolean(switch1), (err) => {
          if( err !== null ) console.log(err);
      });
    }
  }, [switch1]);

    return (
        <>

        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Zarządzanie światłem</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">

              <Zakladka nazwa="Maksymalna wartość domyślna przełączenia" wartosc={swiatlo_pv}>
                <p>Wartość, która określa wartość graniczną zaciemnienia pomieszczenia. Wartość niższa od wpisanej powoduje włączenie oświetlenia</p>
                <UstawieniaPrzycisk tytul="Zmiana wartości domyślnej natężenia światła" komponent={<UstawieniaSwiatloPV />} />
              </Zakladka>
              <Zakladka nazwa="Włączenie światła">
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
                <p>Zmiana stanu pracy oświetlenia</p>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
} 