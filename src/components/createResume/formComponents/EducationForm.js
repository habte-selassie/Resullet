import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from './FormInput';
import SubTitleText from '../subtitleText/SubTitleText';
import { addEducation, deleteEducation } from 'store/reducers/ResumeReducer';
import './Form.css';

function EducationForm({ eduData, setEduData }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    setDataChanged(Object.keys(errors).length > 0);
  }, [errors]);

  const validate = () => {
    const newErrors = {};
    
    if (!eduData.institution.trim()) newErrors.institution = 'Institution name is required';
    if (!eduData.degree.trim()) newErrors.degree = 'Degree is required';
    if (!eduData.fieldOfStudy.trim()) newErrors.fieldOfStudy = 'Field of study is required';
    if (!eduData.startDate.trim()) newErrors.startDate = 'Start date is required';
    if (!eduData.endDate.trim()) newErrors.endDate = 'End date is required';
    
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(addEducation(eduData));
      setDataChanged(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteEducation(eduData.id));
    setEduData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduData({
      ...eduData,
      [name]: value
    });
  };

  return (
    <div className='sub-content'>
        <FormInput label="Institution" name="institution" content={eduData.institution} handleChange={handleChange} error={errors.institution} required />
        <FormInput label="Degree" name="degree" content={eduData.degree} handleChange={handleChange} error={errors.degree} required />
        <FormInput label="Field of Study" name="fieldOfStudy" content={eduData.fieldOfStudy} handleChange={handleChange} error={errors.fieldOfStudy} required />
        <FormInput label="Start Date" name="startDate" type="date" content={eduData.startDate} handleChange={handleChange} error={errors.startDate} required />
        <FormInput label="End Date" name="endDate" type="date" content={eduData.endDate} handleChange={handleChange} error={errors.endDate} required />
        <div className="sub-content-action">
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="save-button" onClick={handleSave} disabled={!dataChanged}>Save</button>
        </div>
    </div>
  );
}

export default EducationForm;
