import React, { useState } from 'react';
import './ResumePage.css';

const ResumePage = () => {
  const [formData, setFormData] = useState({
    loginInfo: '',
    description: '',
    phone: '',
    address: '',
    region: '',
    education: '',
    careers: '',
    awards: '',
    etc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.loginInfo.trim()) newErrors.loginInfo = 'Login info is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.region.trim()) newErrors.region = 'Region is required';
    if (!formData.education.trim()) newErrors.education = 'Education is required';
    if (!formData.careers.trim()) newErrors.careers = 'Careers information is required';
    if (!formData.awards.trim()) newErrors.awards = 'Awards information is required';
    if (!formData.etc.trim()) newErrors.etc = 'ETC information is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
    }
  };

  const handleMint = () => {
    console.log('Minting dNFT...');
  };

  return (
    <div className="resume-page">
      <h1>Create Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Login Info</label>
          <input
            type="text"
            name="loginInfo"
            value={formData.loginInfo}
            onChange={handleChange}
          />
          {errors.loginInfo && <span className="error">{errors.loginInfo}</span>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label>Region</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
          />
          {errors.region && <span className="error">{errors.region}</span>}
        </div>
        <div className="form-group">
          <label>Education</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
          {errors.education && <span className="error">{errors.education}</span>}
        </div>
        <div className="form-group">
          <label>Careers</label>
          <textarea
            name="careers"
            value={formData.careers}
            onChange={handleChange}
          />
          {errors.careers && <span className="error">{errors.careers}</span>}
        </div>
        <div className="form-group">
          <label>Awards</label>
          <textarea
            name="awards"
            value={formData.awards}
            onChange={handleChange}
          />
          {errors.awards && <span className="error">{errors.awards}</span>}
        </div>
        <div className="form-group">
          <label>ETC</label>
          <textarea
            name="etc"
            value={formData.etc}
            onChange={handleChange}
          />
          {errors.etc && <span className="error">{errors.etc}</span>}
        </div>
        <button type="submit">Save Resume</button>
      </form>

      <div className="dnft-minting">
        <h2>dNFT Minting</h2>
        <button onClick={handleMint}>Mint dNFT</button>
      </div>
    </div>
  );
};

export default ResumePage;
