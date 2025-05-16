import React, { useState } from 'react';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        grade: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="admission-form">
            <h2>Admission Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="grade">Grade Applying For:</label>
                    <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a grade</option>
                        <option value="7">7th Grade</option>
                        <option value="8">8th Grade</option>
                        <option value="9">9th Grade</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;