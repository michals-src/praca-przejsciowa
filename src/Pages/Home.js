import Navbar from '../Components/Navbar';
import Zakladka from '../Components/Zakladka';

import {UstawieniaPrzycisk} from '../Components/Sidebar';
import {UstawieniaTrybPracy} from '../Components/UstawieniaWraps';

import { useSelector } from 'react-redux';
import { selectParams } from '../parametry/parametrySlice';


export default function Home(){

  const {tryb_pracy, woda_cv, swiatlo_cv} = useSelector(selectParams);
  const trybPracy = tryb_pracy ? 'Auto' : 'Ręczny';

  return (
        <>
        <header id="main">
            <h1>Praca przejściowa HMI</h1>
            <h6>Podgląd parametrów</h6>
          </header>
          <div className="zakladki-wrap">
            <div className="row">

              <Zakladka nazwa="Tryb pracy" wartosc={trybPracy}>
                <p>Wybór pomiędzy automatycznym i ręcznym sterowaniem układu</p>
                <UstawieniaPrzycisk tytul="Zmiana trybu pracy" komponent={<UstawieniaTrybPracy tryb_pracy={trybPracy} />} />
              </Zakladka>
              <Zakladka nazwa="Wilgotnosc gleby" wartosc={woda_cv}>
                <p>Wartość wilgotności w gleby w miejscu położenia czujnika</p>
              </Zakladka>
              <Zakladka nazwa="Natężenie światła" wartosc={swiatlo_cv}>
                <p>Aktualna wartość, która jest odczytana przez czujnik</p>
              </Zakladka>

            </div>
          </div>

          <Navbar />
        </>
    )
}