const Contact = (parms) => {
  return (
    <>
      <div className="contact">
        {parms.data.name}
        <br />
        {parms.data.phone}
        <br />
        {parms.data.location}
      </div>

      <hr />
    </>
  );
};

export default Contact;
