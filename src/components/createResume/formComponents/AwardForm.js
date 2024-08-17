import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from './FormInput';
import SubTitleText from '../subtitleText/SubTitleText';
import { addAward, deleteAward } from 'store/reducers/ResumeReducer';
import './Form.css';

function AwardForm({ awardData, setAwardData }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    setDataChanged(Object.keys(errors).length > 0);
  }, [errors]);

  const validate = () => {
    const newErrors = {};
    
    if (!awardData.title.trim()) newErrors.title = 'Award title is required';
    if (!awardData.date.trim()) newErrors.date = 'Award date is required';
    if (!awardData.organization.trim()) newErrors.organization = 'Organization is required';
    
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(addAward(awardData));
      setDataChanged(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteAward(awardData.id));
    setAwardData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAwardData({
      ...awardData,
      [name]: value
    });
  };

  return (
    <div className='sub-content'>
        <FormInput label="Title" name="title" content={awardData.title} handleChange={handleChange} error={errors.title} required />
        <FormInput label="Date" name="date" type="date" content={awardData.date} handleChange={handleChange} error={errors.date} required />
        <FormInput label="Organization" name="organization" content={awardData.organization} handleChange={handleChange} error={errors.organization} required />
        <div className="sub-content-action">
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="save-button" onClick={handleSave} disabled={!dataChanged}>Save</button>
        </div>
    </div>
  );
}

export default AwardForm;
