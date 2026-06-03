import { useState } from 'react';

function FormsHandling() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Enter mail" value={formData.email} onChange={handleChange} />

            <h2>{formData.name}</h2>
            <h2>{formData.email}</h2>
        </div>
    );
}

export default FormsHandling;