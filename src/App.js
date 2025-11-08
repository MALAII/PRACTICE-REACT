import './App.css';
import BookList from './components/MAPPING FUNCTION/BookList';
import EmployeeList from './components/MAPPING FUNCTION/EmployeeList';
// import NavBar from './components/NavBar';
// import Course from './components/Course';
// import Footer from './components/Footer';
// import LoginButton from'./components/LoginButton';
// import Counter from'./components/Counter';
// import ToggleContent from'./components/ToggleContent';
// import Message from './components/Message';
// import Greeting from './components/Greeting';
// import StudentAttendance from './components/StudentAttendance';
// import LightSwitch from './components/LightSwitch';
// import ColorChanger from './components/Colorchanger';
// import SimpleLoginApp from './components/SimpleLoginApp';
// import GreetingMessage from './components/GreetingMessage';
// import ShowName from './components/ShowName';
// import CounterApp from './components/CounterApp';
// import TemperatureCheck from './components/TemperatureCheck';
// import FruitsList from './components/FruitsList';
// import NumberList from './components/NumberList';
// import NameList from './components/NameList';
// import CityList from './components/MAPPING FUNCTION/CityList';
// import StudentNames from './components/MAPPING FUNCTION/StudentNames';
// import FruitsSelect from './components/MAPPING FUNCTION/FruitsSelect';
import FruitsTable from './components/MAPPING FUNCTION/FruitsTable';
import StudentMarks from './components/MAPPING FUNCTION/StudentMarks';
import MovieList from './components/MAPPING FUNCTION/MovieList';
import FruitSelector from './components/MAPPING FUNCTION/FruitSelector';
import CourseDropdown from './components/MAPPING FUNCTION/CourseDropdown';
import CategoryList from './components/MAPPING FUNCTION/CategoryList';
import Greetings from './components/PROPS/Greetings';
import Student from './components/PROPS/Student';
import Product from './components/PROPS/Product';
import ArrayProp from './components/PROPS/ArrayProp';
import MovieComp from './components/PROPS/MovieComp';
import ParentCommunication from './components/PROPS/ParentCommunication';
import ParentFunction from './components/PROPS/ParentFunction';
import LoginProp from './components/PROPS/LoginProp';
import ColorProp from './components/PROPS/ColorProp';
import UserInfo from './components/PROPS/UserInfo';

function App() {
    // const stud={
    //     name:"ram",
    //     age:21
    //    }
    //    const detail={ name: "Laptop", price: 55000 };
    //   const fruit=["Apple", "Banana", "Grapes"];
    //   const userdata={isloggedin: true}
     const user={ name: "Priya", address: { city: "Chennai", pincode: 600001 } }
      
  
  return (
    <>
      {/* <NavBar/> */}
      {/* <Footer/> */}
      {/* <LoginButton/>
         <Counter/>
        <ToggleContent/> */}
      {/* <Greeting/> */}
      {/* <StudentAttendance name="john" />
     <StudentAttendance name="Priya" /> */}
      {/* <LightSwitch/> */}
      {/* <ColorChanger/> */}
      {/* <SimpleLoginApp/> */}
      {/* <GreetingMessage />
      <ShowName />
      <CounterApp />
      <TemperatureCheck />
      <FruitsList />
      <NumberList />
      <NameList /> */}
      {/* <CityList/>
      <StudentNames/>
      <FruitsSelect/> */}
      {/* <FruitsTable/> */}
      {/* <StudentMarks/>
      <EmployeeList/>
      <BookList/>
      <MovieList/>
      <FruitSelector/>
      <CourseDropdown/>
      <CategoryList/>
       <Greetings name="keerthana"/>
       <Student user={stud}/>
       <Product details={detail}/>
       <ArrayProp fruits={fruit}/>
       <MovieComp name="Leo" rating="9/10"/>
     <ParentCommunication/>
     <ParentFunction/>
     <LoginProp  user={userdata}/>
     <ColorProp color="green"/>
     <ColorProp color="red"/>
     <ColorProp color="yellow"/> */}
     <UserInfo user1={user}/>

    </>

  );
  
}

export default App;
