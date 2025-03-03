import React, { useState } from "react";
import "./AboutForm.css"; 

function AboutForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    coverPhotos: [],
    price: 0.00,
    benefits: [
      "Avoid talking about politics",
      "Avoid talking about religion",
      "If anyone wants to contact they can go",
    ],
    additionalDetails: [],
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCoverPhotoChange = (e) => {
    setFormData({ ...formData, coverPhotos: [...e.target.files] });
  };

  const handleAddBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ""] });
  };

  const handleBenefitChange = (index, value) => {
    const updatedBenefits = [...formData.benefits];
    updatedBenefits[index] = value;
    setFormData({ ...formData, benefits: updatedBenefits });
  };

  const handleDeleteBenefit = (index) => {
    const updatedBenefits = formData.benefits.filter((_, i) => i !== index);
    setFormData({ ...formData, benefits: updatedBenefits });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>About</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="coverPhotos">Cover Photos (Upload up to 5 photos)</label>
            <input type="file" id="coverPhotos" multiple onChange={handleCoverPhotoChange} />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>

          <h2>Benefits</h2>
          {formData.benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <input type="text" value={benefit} onChange={(e) => handleBenefitChange(index, e.target.value)} />
              <button type="button" onClick={() => handleDeleteBenefit(index)}><i class="bi bi-trash-fill"></i></button>
            </div>
          ))}
          <button type="button" onClick={handleAddBenefit}>+ Add Benefit</button>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default AboutForm;
