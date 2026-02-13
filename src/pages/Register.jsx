import { useState } from "react";
import emailjs from "@emailjs/browser";

const Register = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q1hmm4i",
        "template_5uz0sdi",
        formData,
        "mm022Cw1LKorzzoEa"
      )
      .then(() => {
        alert("Registration submitted successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          company: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send registration. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Nikomax Certification Registration</h1>
        <p>Please fill in the details below to register.</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Additional Information (Optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
