import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

// Inicializar EmailJS (reemplaza con tus propios valores)
emailjs.init('YOUR_USER_ID');

// Definir la interfaz para los datos del formulario de contacto
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Convertir formData a un objeto compatible con Record<string, unknown>
        const formDataObject: Record<string, unknown> = { ...formData };
    
        // Configurar tu servicio de EmailJS (reemplaza con tus propios valores)
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
    
        // Enviar el formulario utilizando EmailJS
        emailjs.send(serviceId, templateId, formDataObject)
            .then((result: EmailJSResponseStatus) => {
                console.log('Correo enviado con éxito!', result.text);
            })
            .catch((error: EmailJSResponseStatus) => {
                console.error('Error al enviar el correo:', error.text);
            });
    
        // Limpiar el formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <h2 style={{ color: 'white' }}>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" style={{ color: 'white' }}>Nombre:</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ backgroundColor: 'black', color: 'white' }} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{ color: 'white' }}>Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ backgroundColor: 'black', color: 'white' }} />
                </div>
                <div className="form-group">
                    <label htmlFor="message" style={{ color: 'white' }}>Mensaje:</label>
                    <textarea className="form-control" id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required style={{ backgroundColor: 'black', color: 'white' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'black' }}>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
