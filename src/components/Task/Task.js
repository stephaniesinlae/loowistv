import React, { useState } from 'react';
import axios from 'axios'

const Task = ({ title, priority, title2, id, done }) => {

    const [check, setCheck] = useState(done);
    const key = 'loowis-293f4';

    const handleChange = () => {
        const body = {};
        body[id] = {
            done: !check,
            priority: priority,
            title: title,
            title2: title2,
        }
        axios.patch(`https://${key}.firebaseio.com/task.json`, body)
            .then(data => setCheck(!check))
            .catch(err => console.log(err));
    }

    const eliminar = () => {
        axios.delete(`https://${key}.firebaseio.com/task/${id}.json`)
            .then(data => window.location.reload())
            .catch(err => console.log(err));
    }

    const agregar = () => {
        axios.post()
    }

    return (
        <div className="card tLetra">
            <div className="d-flex justify-content-between">
                <h6>{title}, {title2}</h6>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={id}
                        checked={check}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={id}>
                        <span className="badge badge-primary">Prioridad: {priority}</span>
                    </label>
                    <button
                        type="button"
                        className="btn btn-danger btn-lg enabled"
                        onClick={() => eliminar()}>🔥
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task;