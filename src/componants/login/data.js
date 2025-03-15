// src/data.js
export const users = [
    {
      email: "amin@gmail.com",
      password: "Qwerty1234!", // Example of a valid password
      status:"owner"
    },
    {
      email: "adam@gmail.com",
      password: "Qwerty4321!", // Example of a valid password
      status:"Teacher"
    }
    
    
  ];
  

  export default users;
  export  const updateUsers = (newData) => {
    users = { ...users, ...newData };
  };