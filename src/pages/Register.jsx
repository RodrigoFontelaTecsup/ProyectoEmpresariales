import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import reservorio from '../img/reservorio.png';

export function Register() {
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

          <h2 className='fw-bold text-center py-5'>Registrate con nosotros!</h2>
          <Form>
            <div className='mb-4'>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresa tu correo electronico'
              />
            </div>
            <div className='mb-4'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresa tu correo electronico'
              />
            </div>
            <div className='mb-4'>
              <Form.Label>Apellido</Form.Label>
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
          <div className='mt-4 d-grid'>
            <Button type='submit' className='btn btn-warning'>
              Registrarme
            </Button>
          </div>
          <div className='my-3'>
            <span>
              Ya tienes cuenta? <Link to='/login'>Ir a login</Link>
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
