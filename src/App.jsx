import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import './App.css';
import { getDatabase, onValue, ref } from 'firebase/database';
import { firebaseConfig } from './components/FirebaseConfig';

function App() {
  const [datoBomba, setDatoBomba] = useState(null);
  const [datoHC_SR04, setDatoHC_SR04] = useState(null);
  const [datoReservorio, setDatoReservorio] = useState(null);
  const [datoDHT11, setDatoDHT11] = useState(null);

  useEffect(() => {
    // firebase.initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);

    // Accede a la referencia de tu base de datos en tiempo real
    const database = getDatabase(app);

    const refBomba = ref(database, 'Bomba');
    const refHC_SR04 = ref(database, 'HC_SR04');
    const refReservorio = ref(database, 'Reservorio');
    const refDHT11 = ref(database, 'dht11');

    // BOMBA
    onValue(refBomba, (snapshot) => {
      const newData = snapshot.val();
      setDatoBomba(newData);
    });

    // SENSOR ULTRASONICO
    onValue(refHC_SR04, (snapshot) => {
      const newData = snapshot.val();
      setDatoHC_SR04(newData);
    });

    // AGUA EN EL RESERVORIO
    onValue(refReservorio, (snapshot) => {
      const newData = snapshot.val();
      setDatoReservorio(newData);
    });

    // SENSOR DE TEMPERATURA Y HUMEDAD
    onValue(refDHT11, (snapshot) => {
      const newData = snapshot.val();
      setDatoDHT11(newData);
    });
  }, []);

  // Temporizador para obtener la data
  if (!datoHC_SR04 || !datoDHT11 || !datoBomba || !datoReservorio) {
    return <p>Fetching data...</p>;
  }

  return (
    <div>
      <h2>Bomba de agua</h2>
      <p>
        La bomba de agua esta{' '}
        <b>{datoBomba.rele ? 'encendida' : 'apagada'}</b>
      </p>
      <h2>Sensor hc-sr04</h2>
      <p>
        La distancia es <b>{datoHC_SR04.distancia}</b>
      </p>
      <h2>Reservorio</h2>
      <p>
        El reservorio tiene <b>{datoReservorio.altura}</b>
      </p>
      <h2>Sensor dht11</h2>
      <p>
        La temperatura es <b>{datoDHT11.temperatura}</b>
      </p>
      <p>
        La humedad es <b>{datoDHT11.humedad}</b>
      </p>
      <br />
    </div>
  );
}

export default App;
