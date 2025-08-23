const RegisterValidation = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    validation: {
      required: "Username is required",
      minLength: {
        value: 5,
        message: "Username must be at least 5 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@mail.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
];

export default  RegisterValidation;

 export const LogInValidation = [
  
  {
    name: "identifier",
    label: "Email",
    type: "email",
    placeholder: "example@mail.com",
    validation: {
      required: "identifier is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
];


