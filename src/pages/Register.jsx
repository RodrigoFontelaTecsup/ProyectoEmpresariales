import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import reservorio from '../img/reservorio.png';
import axios from 'axios';
import { useState } from 'react';

export function Register() {
  const client = axios.create({
    baseURL: 'http://127.0.0.1:8000',
  });

  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submitRegistration(e) {
    e.preventDefault();
    client
      .post('/api/register/', {
        email: email,
        username: username,
        password: password,
      })
      .then(function (res) {
        client
          .post('/api/login/', {
            email: email,
            password: password,
          })
          .then(function (res) {
            navigate('/home');
          });
      });
  }

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
          <Form onSubmit={(e) => submitRegistration(e)}>
            <div className='mb-4'>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresa tu correo electronico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresa tu usuario'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type='password'
                placeholder='Ingresa tu contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mt-4 d-grid'>
              <Button type='submit' className='btn btn-warning'>
                Registrarme
              </Button>
            </div>
          </Form>
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
