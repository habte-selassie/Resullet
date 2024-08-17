import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubTitleText from '../subtitleText/SubTitleText';
import { addCareer, deleteCareer } from 'store/reducers/ResumeReducer';
import './Form.css';

function CareerForm({ careerData, setCareerData }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    setDataChanged(Object.keys(errors).length > 0);
  }, [errors]);

  const validate = () => {
    const newErrors = {};
    
    if (!careerData.company.trim()) newErrors.company = 'Company name is required';
    if (!careerData.position.trim()) newErrors.position = 'Position is required';
    if (!careerData.startDate.trim()) newErrors.startDate = 'Start date is required';
    if (!careerData.endDate.trim()) newErrors.endDate = 'End date is required';
    if (!careerData.description.trim()) newErrors.description = 'Description is required';
    
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(addCareer(careerData));
      setDataChanged(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteCareer(careerData.id));
    setCareerData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerData({
      ...careerData,
      [name]: value
    });
  };

  return (
    <div className='sub-content'>
        <FormInput label="Company" name="company" content={careerData.company} handleChange={handleChange} error={errors.company} required />
        <FormInput label="Position" name="position" content={careerData.position} handleChange={handleChange} error={errors.position} required />
        <FormInput label="Start Date" name="startDate" type="date" content={careerData.startDate} handleChange={handleChange} error={errors.startDate} required />
        <FormInput label="End Date" name="endDate" type="date" content={careerData.endDate} handleChange={handleChange} error={errors.endDate} required />
        <FormTextArea label="Description" name="description" content={careerData.description} handleChange={handleChange} error={errors.description} required />
        <div className="sub-content-action">
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="save-button" onClick={handleSave} disabled={!dataChanged}>Save</button>
        </div>
    </div>
  );
}

export default CareerForm;
