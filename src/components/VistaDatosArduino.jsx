
export function VistaDatosArduino({
  datoBomba,
  datoHC_SR04,
  datoReservorio,
  datoDHT11,
}) {
  return (
    <div className='text-center'>
      <h2>Bomba de agua</h2>
      <p>
        La bomba de agua está <b>{datoBomba.rele ? 'encendida' : 'apagada'}</b>
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
