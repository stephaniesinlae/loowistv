import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import '../AppNav/AppNav.css';

const NewTask = () => {
    const PROJECT = 'loowis-293f4';

    const [title, setTitle] = useState('');
    const [title2, setTitle2] = useState('');
    const [priority, setPriority] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleTitle = (e) => {
        // console.log(e.target.value)
        setTitle(e.target.value);
    }
    const handleTitle2 = (e) => {
        // console.log(e.target.value)
        setTitle2(e.target.value);
    }
    const handlePriority = (e) => {
        // console.log(e.target.value)
        setPriority(e.target.value);
    }

    const createTask = () => {
        console.log(history);
        setLoading(true);
        if (priority => 1 && priority <= 3 > 0 <= 5 && title.length > 0 && title.length <= 30) {
            const body = {
                title: title,
                title2: title2,
                done: false,
                priority: priority
            }
            axios.post(`https://${PROJECT}.firebaseio.com/task.json`, body)
                .then(()=> {
                    history.push('./')
                    alert('Gracias por agregarte :D en el stream estaremos mencionando en que momento juegas.')
                })
                .catch(()=> {
                    setLoading(false);
                    setError('Ocurrio un error de conexion')
                });
        } else {
            setLoading(false);
            setError('Verifica que ingresaste informacion valida');

        }
    };

    return (
        <div className="card fondoA tLetra">
            <div className="container">
                <h1>Agrega a personas</h1>
                <div className="form-group">
                    <label htmlFor="">Ingrese el nombre/usuario de alguien</label>
                    <input onChange={handleTitle} placeholder="No debe ser mayor a 30 caracteres" value={title} className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Ingrese el nombre/usuario de alguien x2</label>
                    <input onChange={handleTitle2} placeholder="No debe ser mayor a 30 caracteres" value={title2} className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">¿Cuál es la prioridad?</label>
                    <input onChange={handlePriority} placeholder="1=Suscriptor, 2=Seguidor" value={priority} className="form-control" type="number" max="3" min="1" />
                </div>
                <div className="text-danger">
                    {error}
                </div>
                {loading
                    ? 
                    <div className="spinner-border text-info" role="status">
                    </div>
                    : <button onClick={() => createTask()} type="submit" className="btn btn-primary">Ingresar</button>
                }
            </div>
        </div>
    )
}

export default NewTask