import React, { useState } from 'react';
import './Newsletter.css';
import { API_URL } from './config';

interface NewsletterFormData {
  name: string;
  email: string;
  phone: string;
}

const Newsletter = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => {
          setShowForm(false);
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error al conectar con el servidor');
    }
    setShowConfirm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="newsletter-section">
      <button 
        className="newsletter-signup-button" 
        onClick={() => setShowForm(true)}
      >
        CONTENIDO EXCLUSIVO
      </button>

      {showForm && (
        <div 
          className="newsletter-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForm(false);
            }
          }}
        >
          <div className="newsletter-modal-content">
            <h3 className="newsletter-title">CONTENIDO EXCLUSIVO</h3>
            <p className="newsletter-subtitle">Recibe demos y noticias antes que nadie</p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Número de teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button type="submit" className="newsletter-button">
                REGISTRARME
              </button>
            </form>

            {status !== 'idle' && (
              <p className={`newsletter-message ${status}`}>
                {message}
              </p>
            )}

            <button 
              type="button" 
              className="newsletter-close" 
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <h4>Confirmar registro</h4>
            <p>¿Estás seguro de compartir tu información con nosotros?</p>
            <div className="confirm-buttons">
              <button onClick={() => setShowConfirm(false)}>Cancelar</button>
              <button onClick={(e) => handleSubmit(e)}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
