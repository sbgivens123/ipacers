export default function PageNotFound() {
  const buttonStyle = {
    padding: 7,
    margin: 10,
    borderRadius: "5px",
    border: "1px solid black",
  };

  return (
    <>
      {console.log("Developed by Brijes Mandal.")}
      <h1>404 Page Not Found Error</h1>
      <br />
      <button style={buttonStyle}>
        <a href="/" style={{ textDecoration: "none", fontWeight: "bolder" }}>
          Return to home page
        </a>
      </button>
    </>
  );
}
