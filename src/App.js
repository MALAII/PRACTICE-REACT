import './App.css';
// import BookList from './components/MAPPING FUNCTION/BookList';
// import EmployeeList from './components/MAPPING FUNCTION/EmployeeList';
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
// import FruitsTable from './components/MAPPING FUNCTION/FruitsTable';
// import StudentMarks from './components/MAPPING FUNCTION/StudentMarks';
// import MovieList from './components/MAPPING FUNCTION/MovieList';
// import FruitSelector from './components/MAPPING FUNCTION/FruitSelector';
// import CourseDropdown from './components/MAPPING FUNCTION/CourseDropdown';
// import CategoryList from './components/MAPPING FUNCTION/CategoryList';
// import Greetings from './components/PROPS/Greetings';
// import Student from './components/PROPS/Student';
// import Product from './components/PROPS/Product';
// import ArrayProp from './components/PROPS/ArrayProp';
// import MovieComp from './components/PROPS/MovieComp';
// import ParentCommunication from './components/PROPS/ParentCommunication';
// import ParentFunction from './components/PROPS/ParentFunction';
// import LoginProp from './components/PROPS/LoginProp';
// import ColorProp from './components/PROPS/ColorProp';
// import UserInfo from './components/PROPS/UserInfo';
// import NameForm from './components/FORM/NameForm';
// import GenderForm from './components/FORM/GenderForm';
// import LoginCheck from './components/FORM/LoginCheck'
// import TermsForm from './components/FORM/TermsForm';
// import FeedbackForm from './components/FORM/FeedBackForm';
// import Practice6 from './components/USE_EFFECT/Practice6';
// import CartExample from './components/CONDITIONAL RENDERING/CartExample';
// import Practice4 from './components/USE_EFFECT/Practice4';
// import CountExample from './components/USE_EFFECT/CountExample';
// import UseEffectDemo from './components/USE_EFFECT/UseEffectDemo';
// import Practice1 from './components/USE_EFFECT/Practice1';
// import Practice2 from './components/USE_EFFECT/Practice2';
// import Practice3 from './components/USE_EFFECT/Practice3';
// import Practice5 from './components/USE_EFFECT/Practice5';

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/PAGES/Home';
import Profile from './components/PAGES/Profile';
import Contact from './components/PAGES/Contact';
import PageNotFound from './components/PAGES/PageNotFound';
import Login from './components/PAGES/Login';
import Products from './components/PAGES/Products';
import ButtonNavigation from './components/NAVIGATION/ButtonNavigation';
import NavigateBack from './components/NAVIGATION/NavigateBack';
import ConditionalNavigation from './components/NAVIGATION/ConditionalNavigation';


function App() {
  // const stud={
  //     name:"ram",
  //     age:21
  //    }
  //    const detail={ name: "Laptop", price: 55000 };
  //   const fruit=["Apple", "Banana", "Grapes"];
  //   const userdata={isloggedin: true}
  const user = { name: "Priya", address: { city: "Chennai", pincode: 600001 } }


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
      {/* <UserInfo user1={user}/>
     <NameForm/>
     <GenderForm/>
     <LoginCheck/>
     <TermsForm/>
     <FeedbackForm/> */}
      {/* <CountExample/>
     <UseEffectDemo/>
     <Practice1 name="ram"/> */}
      {/* <Practice2/> */}
      {/* <Practice3/> */}
      {/* <Practice4/> */}
      {/* <Practice5/> */}
      {/* <Practice6/>
 <CartExample/> */}
        <BrowserRouter>

        <nav>
          <Link to='/home' >Home</Link> |
          <Link to='/profile'>Profile</Link> |
          <Link to='contact' >Contact</Link>  |
          <Link to='/absxd'>Page not found</Link > | 
          <Link to='/login'>Login</Link>  |
          <Link to='/products/:id'>Products</Link>  |
          <Link to='/buttonnavigation'>Button</Link> |
          <Link to='/navigateback' >back</Link> |
          <Link to ='/conditionalnavigation'>navigate</Link>

        
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='*' element ={<PageNotFound/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/products/:id' element={<Products/>}></Route>
          <Route path='/buttonnavigation' element={<ButtonNavigation/>}></Route>
          <Route path='/navigateback' element={<NavigateBack/>}></Route>
          <Route path='/conditionalnavigation' element={<ConditionalNavigation/>}></Route>

        </Routes>
        
        
        
        
        
        </BrowserRouter>


    </>


  );

}

export default App;
