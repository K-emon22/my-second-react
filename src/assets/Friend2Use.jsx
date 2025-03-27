const Friend2Use = ({Friend}) => {

    const {id,name,username,email,address}=Friend
  return (
    <div >
        <div style={{backgroundColor: "", border: "2px solid yellow" ,padding:'20px' ,borderRadius:'30px'}}>
      <h3 >Id  :{id}</h3>
      <h3 >Name :{name}</h3>
      <h3 >Username :{username}</h3>
      <h3 >Email :{email}</h3>
      {/* <h3 style={{backgroundColor: "", border: "2px solid yellow" ,padding:'20px' ,borderRadius:'30px'}}>Address :{address}</h3> */}
    </div>
    </div>
  );
};

export default Friend2Use;
