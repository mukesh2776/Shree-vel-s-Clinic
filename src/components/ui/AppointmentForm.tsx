'use client';

import React, { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.patientName.trim()) newErrors.patientName = 'Name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Enter a valid 10-digit number';
    }
    if (!formData.department) newErrors.department = 'Department is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    const text = `Hello Shree Vel's Clinic,%0A%0AI would like to request an appointment.%0A%0A*Name:* ${formData.patientName}%0A*Phone:* ${formData.phoneNumber}%0A*Department:* ${formData.department}%0A*Preferred Date:* ${formData.preferredDate || 'Not specified'}%0A*Preferred Time:* ${formData.preferredTime || 'Not specified'}%0A*Message:* ${formData.message || 'None'}`;
    
    const whatsappUrl = `https://wa.me/918778896736?text=${text}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({
        patientName: '',
        phoneNumber: '',
        department: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${errors.patientName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your Name"
            />
            {errors.patientName && <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>}
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-charcoal mb-1">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="10-digit mobile number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-charcoal mb-1">Department *</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white ${errors.department ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Department</option>
            <option value="Dermatology">Skin Care & Dermatology</option>
            <option value="Obstetrics & Gynaecology">Women&apos;s Health (O&amp;G)</option>
          </select>
          {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal mb-1">Preferred Date (Optional)</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-charcoal mb-1">Preferred Time (Optional)</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
            >
              <option value="">Select Time Slot</option>
              <option value="Afternoon (1.30 PM - 4.30 PM)">Afternoon (1.30 PM - 4.30 PM)</option>
              <option value="Evening (5.30 PM - 8.30 PM)">Evening (5.30 PM - 8.30 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message / Reason for Visit (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
            placeholder="Briefly describe your health concern..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center"
        >
          {isSubmitting ? 'Redirecting to WhatsApp...' : 'Book Appointment via WhatsApp'}
        </button>
        
        <p className="text-xs text-secondary-text text-center mt-4">
          Appointment confirmation is subject to clinic availability. Our team will confirm your appointment via WhatsApp.
        </p>
      </form>
    </div>
  );
}
