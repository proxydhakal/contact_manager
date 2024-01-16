import React from "react";
import Contact from "./components/Contact";
const App = () => {
  const contacts = [
    {
      name: "Shekhar",
      phone: "9840177381",
      location: "Kathmandu",
    },
    {
      name: "Raphu",
      phone: "9802267851",
      location: "Banepa",
    },
    {
      name: "Bikhyat",
      phone: "9840177381",
      location: "Kalopul",
    },
  ];
  return (
    <>
      <div className="container">
        <h3>Contact List</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};

export default App;
