const Zakladka = (props) => {

    const {nazwa, wartosc, children} = props;

    return (
        <div className="col col-12">
        <div className="zakladka">
            <header>
            <div className="row">
                <div className="col col-8 align-items-center justify-content-end">
                <h5 className="nazwa-zakladki"><div className="badge bg-secondary">{nazwa}</div></h5>
                </div>
                <div className="col col-4 d-flex align-items-center justify-content-end">
                <div className="text-end">
                    {wartosc}
                </div>
                </div>
            </div>
            </header>
            <div className="zakladka-tresc">
            {children}
            </div>
            <footer></footer>
        </div>
        </div>
    );
}

export default Zakladka;