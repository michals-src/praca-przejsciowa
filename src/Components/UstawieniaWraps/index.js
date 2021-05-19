// export { * as nazwa } from './xd';
import {useRef, useState} from 'react';

const Ustawienia_tryb_pracy = () => {
    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <p className="my-0">Układ pracuje w trybie <div className="badge bg-warning">Auto</div></p>
            </div>
            <div className="d-flex flex-row">
                <div>Tryb ręczny</div>
                <div className="mx-3">
                <div className="form-check form-switch ml-auto">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
                </div>
                <div>Tryb automatyczny</div>
            </div>
            </div>
        </div>
    );
}

const Ustawienia_woda_pv = () => {

    const [PV, setPV] = useState(0);

    const handleSave = () => {
        console.log(PV);
    }

    const handlePVchange = (e) => {
        setPV(e.target.value);
    }

    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <span className="h5 mr-2"><div className="badge bg-warning">500</div></span>
                <p className="my-0"> Aktualna wartośc zadana wilgotności gleby</p>
            </div>
            <div className="mt-3 d-flex flex-column">
                <p>Wpisz nową wartość zadaną (0-1000)</p>
                <input className="form-control form-control-lg" type="text" id="flexSwitchCheckDefault" value={PV} onChange={handlePVchange} />
                <div className="mt-2">
                    <button className="btn btn-primary" onClick={handleSave}>Zapisz</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export {Ustawienia_tryb_pracy, Ustawienia_woda_pv};