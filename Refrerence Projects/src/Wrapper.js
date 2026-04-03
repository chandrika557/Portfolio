function Wrapper(props) {
  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
      {props.children}
    </div>
  );
}
export default Wrapper;
    