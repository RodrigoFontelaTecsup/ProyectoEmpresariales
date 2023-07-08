import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import reservorio from '../img/reservorio.png';

export function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home');
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col d-flex align-items-center'>
          <img
            style={{ backgroundPosition: 'center center' }}
            src={reservorio}
            alt='imgReservorio'
          />
        </div>
        <div className='col'>
          <div className='text-end'>
            <img src='' width={'48'} alt='LOGO' />
          </div>

          <h2 className='fw-bold text-center py-5'>
            Bienvenido a nuestra pagina web!
          </h2>
          <Form>
            <div className='mb-4'>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresa tu correo electronico'
              />
            </div>
            <div className='mb-4'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type='password'
                placeholder='Ingresa tu contraseña'
              />
            </div>
          </Form>
          <div className='mt-4 mr-4 form-check'>
            <Form.Control
              type='checkbox'
              name='connected'
              className='form-check-input'
            />
            <Form.Label className='form-check-label'>
              Mantenerme conectado
            </Form.Label>
          </div>
          <div className='d-grid'>
            <Button
              onClick={handleLoginClick}
              type='submit'
              className='btn btn-primary'
            >
              Iniciar Sesion
            </Button>
          </div>
          <div className='my-3'>
            <span>
              No tienes cuenta? <Link to='/register'>Registrate</Link>
            </span>
            <br />
            <span>
              <Link href='#'>Recuperar contraseña</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
