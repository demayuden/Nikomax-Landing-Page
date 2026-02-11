const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Nikomax Certification Registration</h1>
        <p>Please fill in the details below to register.</p>

        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Company Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Additional Information (Optional)" />

          <button type="submit" className="btn-primary">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
