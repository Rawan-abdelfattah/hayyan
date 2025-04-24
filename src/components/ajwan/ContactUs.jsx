import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [defaultCountry, setDefaultCountry] = useState("us");
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    fetch(
      "https://api.sheetbest.com/sheets/424b0673-f5a8-440a-a009-6b7421cda7a3",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to save data");
        return response.json();
      })
      .then(() => {
        navigate("/thank-you");
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  useEffect(() => {
    fetch("https://ipinfo.io/json?token=1ed173baff89f5")
      .then((res) => res.json())
      .then((data) => {
        if (data.country) {
          setDefaultCountry(data.country.toLowerCase());
        }
      })
      .catch((err) => console.error("Geolocation error:", err));
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Our expert will help you choose the perfect property
          </h2>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl">
          <Form layout="vertical" onFinish={handleSubmit} className="space-y-4">
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="!h-[40px] !bg-gray-50 !rounded !border !border-gray-300 focus:!border-[#16A2B8] focus:!ring-[#16A2B8]"
              />
            </Form.Item>

            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="!h-[40px] !bg-gray-50 !rounded !border !border-gray-300 focus:!border-[#16A2B8] focus:!ring-[#16A2B8]"
              />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  validator: (_, value) => {
                    if (
                      !value ||
                      value.replace(/\D/g, "").length <= defaultCountry?.length
                    ) {
                      return Promise.reject(
                        new Error("Please enter a valid phone number")
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              {" "}
              <PhoneInput
                country={defaultCountry}
                value={formData.phone}
                onChange={handlePhoneChange}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #E5E5E5",
                  paddingLeft: "55px",
                  fontSize: "16px",
                  backgroundColor: "#f9fafb",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  border: "none",
                  padding: "0 12px",
                }}
                dropdownStyle={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              label="Expected Budget"
              name="budget"
              rules={[{ required: true, message: "Please enter your budget" }]}
            >
              <Input
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Example: 500000"
                className="!h-[40px] !bg-gray-50 !rounded !border !border-gray-300 focus:!border-[#16A2B8] focus:!ring-[#16A2B8]"
                type="number"
                step="any"
                min="0"
                rules={[
                  { required: true, message: "Please enter your budget" },
                ]}
              />
            </Form.Item>

            <Form.Item label="Message" name="message">
              <Input.TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                className="!bg-gray-50 !rounded !border !border-gray-300 focus:!border-[#16A2B8] focus:!ring-[#16A2B8]"
              />
            </Form.Item>

            <Form.Item className="pt-2 text-center md:text-left">
              <Button
                type="primary"
                htmlType="submit"
                className="!bg-[#16A2B8] hover:!bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
              >
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
