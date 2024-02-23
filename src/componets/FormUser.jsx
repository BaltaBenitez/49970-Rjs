import React, { useState } from "react";

const FormUser = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, email, telefono });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    type="tel"
                    className="form-control"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Generar Orden</button>
        </form>
    );
};

export default FormUser;