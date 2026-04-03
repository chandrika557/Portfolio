function Properties(props) {
  return (
    <>
      <h2>Default props component</h2>
      <p>{props.name}</p>
    </>
  );
}
Properties.defaultProps = {
  name: "Dabhade",
};

export default Properties;
