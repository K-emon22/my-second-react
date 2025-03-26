const Summery = ({FetchUsers}) => {
  return (
    <div>
      <h1 style={{border:'2px solid yellow',padding:'50px',borderRadius:'30px'}}>Users:{FetchUsers.length} </h1>
    </div>
  );
};

export default Summery;
