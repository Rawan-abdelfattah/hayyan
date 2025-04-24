import { Modal, Form, Input, Button } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUsModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [defaultCountry, setDefaultCountry] = useState("us");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    fetch(
      "https://api.sheetbest.com/sheets/ef221e6f-a3b4-4623-b9d0-efdfc443202f",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    )
      .then((res) => res.json())
      .then(() => navigate("/thank-you"))
      .catch((err) => console.error("Error saving data:", err));
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
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      title="Contact Us"
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ phone: "" }}
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Your Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              validator: (_, value) => {
                const digitsOnly = value?.replace(/\D/g, "") || "";
                if (!value || digitsOnly.length < 8) {
                  return Promise.reject(
                    new Error("Please enter a valid phone number")
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <PhoneInput
            country={defaultCountry}
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
            placeholder="Example: 500000"
            className="!h-[40px] !bg-gray-50 !rounded !border !border-gray-300 focus:!border-[#16A2B8] focus:!ring-[#16A2B8]"
            type="number"
            step="any"
            min="0"
            rules={[{ required: true, message: "Please enter your budget" }]}
          />
        </Form.Item>

        <Form.Item label="Message" name="message">
          <Input.TextArea rows={3} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#16A2B8] hover:!bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
            size="large"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactUsModal;
