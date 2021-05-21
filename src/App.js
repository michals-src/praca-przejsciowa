import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import firebaseConfig from './app/firebase-config.json';
import firebase from 'firebase/app';
import 'firebase/database';
import { useListKeys } from 'react-firebase-hooks/database';

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

import sidebarContext from './sidebarContext';
import Sidebar from './Components/Sidebar';
import {useSidebar} from './hooks/useSidebar';

import Home from './pages/home';
import Woda from './pages/woda';
import Swiatlo from './pages/swiatlo';

import { zapisz, selectParams } from './parametry/parametrySlice';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app();
}

function App() {

  const db = firebase.database();
  const [snapshot, loading, err] = useListKeys(db.ref());

  const value = useSidebar();
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  
  useEffect(() => {
    
    const parametry = {...params};

    if(snapshot.length > 0){
      snapshot.map( key => {
        db.ref(key).on('value', (value) => {
          if( value !== "undefined" && key in params ){
            parametry[key] = value.val();
          }
        });
      });
      dispatch(zapisz(parametry));
      
    };

  }, [snapshot]);


  return (
    <div className="praca-przejsciowa-client">
      <div className="ramka">
      
      <sidebarContext.Provider value={value}>
        
        <Router basename="/">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/woda" exact component={Woda} />
            <Route path="/swiatlo" exact component={Swiatlo} />
          </Switch>
        </Router>

        <Sidebar />
        
      </sidebarContext.Provider>

      </div>
    </div>
  );
}

export default App;
