function Course({name , description, image,show}){
    if(show===true){
    return(
        <div className="card">
       <img src={image} alt="" />
       <h1>{name}</h1>
       <p>{description}</p>
       <button>Click me</button>
       </div>
    );
} 

else {
    return(
    <div className="card">Course not available</div>
    )
}
}
Course.defaultProps={
    name:"Undefined Course",
    description:"Undefined Course description"
};
export default Course;