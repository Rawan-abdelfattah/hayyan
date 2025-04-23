import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the style

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'contact_form_data.xlsx');
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Our expert will help you choose the perfect property
          </h2>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 focus:border-[#16A2B8] focus:ring-[#16A2B8] rounded px-4 py-2 bg-gray-50 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 focus:border-[#16A2B8] focus:ring-[#16A2B8] rounded px-4 py-2 bg-gray-50 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <PhoneInput
                country={'eg'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: 'w-full',
                }}
                inputClass="!w-full !py-2 !px-4 !rounded !border !border-gray-300"
                containerClass="!w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 focus:border-[#16A2B8] focus:ring-[#16A2B8] rounded px-4 py-2 bg-gray-50 outline-none transition"
              />
            </div>
            <div className="pt-2 text-center md:text-left">
              <button
                type="submit"
                className="bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
