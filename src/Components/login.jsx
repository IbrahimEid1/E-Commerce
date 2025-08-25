import { Link, useNavigate } from "react-router-dom";
import Button  from "../Components/UI/Buttons"
import Inputs  from "../Components/UI/Inputs"
import ConvertLogOrReg  from "../Components/UI/ConvertLogOrReg"
import { LogInValidation } from "./RegisterValidation";
import instance from "./config/axios.config";
import Swal from 'sweetalert2';
import { useState } from "react";


export default function Login() {
  const Navigate = useNavigate();
    const [FormLogin, setFormLogin] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormLogin({ ...FormLogin, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: ""});
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!FormLogin.identifier.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.identifier = "Enter a valid email";
    }
    if (!FormLogin.password || FormLogin.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const res = await instance.post("auth/local", FormLogin);
      console.log(res);
      
      if (res.status === 200) {
        await Swal.fire({
          icon: 'success',
          title: "Login is successful",
          text: "AFTER 5 SECOND Login ",
          confirmButtonText: 'Success',
          timer: 5000
        });
      }
      localStorage.setItem("loginToken" , JSON.stringify(res.data))
      setTimeout(() => {
        location.replace("/home");
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      
      let errorMessage = "Registration failed. Please try again.";
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = "Bad request. Please check your input.";
        } else if (error.response.status === 409) {
          errorMessage = "User already exists with this email or username.";
        } else if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
      }
      
      await Swal.fire({
        icon: 'error',
        title: "Registration failed",
        text: errorMessage,
        confirmButtonText: 'Retry'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderLogin = LogInValidation.map(
    ({   name, placeholder, label, type }, idx) => (
      <div key={idx}>
        <Inputs
          type={type}
          name={name}
          placeholder={placeholder}
          label={label}
          value={FormLogin[name]}
          onChange={handleChange}
          disabled={isSubmitting}
          autoComplete="current-password" 

        />
        {errors[name] && <InpErrorMsg msg={errors[name]} />}
      </div>
    )
  )
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
               {renderLogin}
               <Button 
                        type="submit" 
                        text={isSubmitting ? "Processing..." : "Submit"} 
                        disabled={isSubmitting}
                      />
            <ConvertLogOrReg to="/register" text="Register" />
        </form>
       
      </div>
    </div>
  );
}
