'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Validation schema using Yup
const appointmentSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  middleName: yup.string().optional(),
  lastName: yup.string().required('Last name is required'),
  dob: yup.date().required('Date of birth is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  countryOfResidence: yup.string().required('Country of residence is required'),
  nationality: yup.string().required('Nationality is required'),
  treatmentType: yup.string().required('Please select a treatment type'),
  urgency: yup.string().required('Please select the urgency level'),
  symptoms: yup.string().required('Please describe the symptoms'),
});

const AppointmentsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset, // Include reset function from react-hook-form
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      if (files.length > 15) {
        alert('You can upload a maximum of 15 files.');
        return;
      }
      setUploadedFiles(files);
    }
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // Append uploaded files
    uploadedFiles.forEach((file) => {
      formData.append('medicalHistory', file);
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setShowPopup(true);
        
        // Clear the form after successful submission
        reset(); // Reset form fields
        setUploadedFiles([]); // Clear uploaded files state
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Book a Medical Appointment</h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">First Name</label>
            <input
              {...register('firstName')}
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Middle Name (Optional)</label>
            <input
              {...register('middleName')}
              placeholder="Middle Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Last Name</label>
            <input
              {...register('lastName')}
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Date of Birth</label>
            <input
              type="date"
              {...register('dob')}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Phone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={'us'}
                  value={field.value}
                  onChange={(phone) => field.onChange(phone)}
                  inputStyle={{ width: '100%', padding: '16px', borderRadius: '8px' }}
                  containerClass="w-full"
                  inputClass="w-full border border-gray-300 rounded-lg"
                />
              )}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Country of Residence</label>
            <input
              {...register('countryOfResidence')}
              placeholder="Country of Residence"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.countryOfResidence && <p className="text-red-500 text-sm">{errors.countryOfResidence.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Nationality</label>
            <input
              {...register('nationality')}
              placeholder="Nationality"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Treatment Type</label>
            <select
              {...register('treatmentType')}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Treatment Type</option>
              <option value="Consultation">Consultation</option>
              <option value="Emergency">Emergency</option>
              <option value="Routine Check-up">Routine Check-up</option>
              <option value="Specialist Visit">Specialist Visit</option>
            </select>
            {errors.treatmentType && <p className="text-red-500 text-sm">{errors.treatmentType.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Urgency Level</label>
            <select
              {...register('urgency')}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Urgency Level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            {errors.urgency && <p className="text-red-500 text-sm">{errors.urgency.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Symptoms</label>
            <textarea
              {...register('symptoms')}
              placeholder="Describe your symptoms"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Upload Medical History (up to 15 files)</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
              <p className="text-gray-600">Our team will contact you soon.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
