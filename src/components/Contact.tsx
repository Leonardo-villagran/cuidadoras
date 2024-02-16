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
        <div id="contact" className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Formulario de Contacto</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensaje:</label>
                                    <textarea className="form-control" id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;