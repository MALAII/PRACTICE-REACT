function UserInfo({user1:{name, address:{city,pincode}}}){
    return(
        <>
       
    <p>Name: {name}</p>
    <p>City: {city}</p>
    <p>Pincode: {pincode}</p>
    </>
    );
}
export default UserInfo;