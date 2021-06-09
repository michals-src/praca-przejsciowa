import { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';

import { useSelector } from 'react-redux';
import { selectParams } from '../../parametry/parametrySlice';

//9AFD8AAE-10BD-46B0-BEE3-E570606B8FBD

const UstawieniaTrybPracy = ({ tryb_pracy }) => {

    const [ value, setValue ] = useState(tryb_pracy === "Auto");

    useEffect(() => {
        firebase.database().ref('/tryb_pracy').set(value, (err) => {
            if( err !== null ) console.log(err);
        });
    }, [value]);

    

    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <p className="my-0">Układ pracuje w trybie <span className="badge bg-warning">{value === true ? "Automatyczny" : "Ręczny"}</span></p>
            </div>
            <div className="d-flex flex-row">
                <div>Tryb ręczny</div>
                <div className="mx-3">
                <div className="form-check form-switch ml-auto">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={value} checked={value} onChange={ () => setValue(!value) } />
                </div>
                </div>
                <div>Tryb automatyczny</div>
            </div>
            </div>
        </div>
    );
}

const Ustawienia_woda_pv = () => {

    const { woda_pv } = useSelector(selectParams);
    const [PV, setPV] = useState(woda_pv);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if( PV < 0 || PV > 1000) return;

        firebase.database().ref('/woda_pv').set(Number(PV), (err) => {
            if( err !== null ) console.log(err);
        });
    }

    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <span className="h5 mr-2"><div className="badge bg-warning">{woda_pv}</div></span>
                <p className="my-0"> Aktualna wartośc zadana wilgotności gleby</p>
            </div>
            <div className="mt-3 d-flex flex-column">
                <p>Wpisz nową wartość zadaną (0-1000)</p>
                <form onSubmit={handleSubmit}>
                    <input className="form-control form-control-lg" type="text" id="flexSwitchCheckDefault" value={PV} onChange={(e) => setPV(e.target.value)} />
                    <div className="mt-2">
                        <button className="btn btn-primary">Zapisz</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

const UstawieniaWodaHist = () => {

    const { woda_his } = useSelector(selectParams);
    const [ HIS, setHIS ] = useState(woda_his);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if( HIS < 0 || HIS > 60) return;

        firebase.database().ref('/woda_czas').set(Number(HIS), (err) => {
            if( err !== null ) console.log(err);
        });
    }

    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <span className="h5 mr-2"><div className="badge bg-warning">{woda_his}</div></span>
                <p className="my-0"> Aktualna wartość czasu pracy pompu [s]</p>
            </div>
            <div className="mt-3 d-flex flex-column">
                <p>Wpisz nową wartość zadaną (0-60 [s])</p>
                <form onSubmit={handleSubmit}>
                    <input className="form-control form-control-lg" type="text" id="flexSwitchCheckDefault" value={HIS} onChange={(e) => setHIS(e.target.value)} />
                    <div className="mt-2">
                        <button className="btn btn-primary">Zapisz</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

const UstawieniaSwiatloPV = () => {

    const { swiatlo_pv } = useSelector(selectParams);
    const [ PV, setPV ] = useState( swiatlo_pv );
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if( PV < 0 || PV > 1000) return;

        firebase.database().ref('/swiatlo_pv').set(Number(PV), (err) => {
            if( err !== null ) console.log(err);
        });
    }

    return (
        <div className="row">
            <div className="col offset-2">
            <div className="mt-4">
                <span className="h5 mr-2"><div className="badge bg-warning">{ swiatlo_pv }</div></span>
                <p className="my-0"> Aktualna ustalona wartość włączenia oświetlenia</p>
            </div>
            <div className="mt-3 d-flex flex-column">
                <p>Wpisz nową wartość zadaną (0-1000)</p>
                <form onSubmit={handleSubmit}>
                    <input className="form-control form-control-lg" type="text" id="flexSwitchCheckDefault" value={PV} onChange={(e) => setPV(e.target.value)} />
                    <div className="mt-2">
                        <button className="btn btn-primary">Zapisz</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export {UstawieniaTrybPracy, Ustawienia_woda_pv, UstawieniaWodaHist, UstawieniaSwiatloPV};