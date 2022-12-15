export const Character = ({ image, name, location, status, species }) => {
  return (
    <>
      <div className="characterCard">
        <img src={image} alt={name} />
        <div className="characterInfo">
          <h3>{name}</h3>
          <hr />
          <p>Species: {species}</p>
          <p>Status: {status}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </>
  );
};
