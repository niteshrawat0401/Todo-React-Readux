// import StaticCard, { StaticCard1 } from "./component/StaticCard"
// import TodoList from './day2/TodoList';
// import { Todos } from "./component/Todos";

import "./App.css";

// import Navbar from "./componenets/Navbar"
// import  Home from "./pages/Home";
// import Login from "./pages/Login"
// import About from "./pages/About"
// import SignIn from "./componenets/SignIn";
// import Signup from "./componenets/Signup"
// import SignGoogle from "./componenets/SignGoogle";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { Counter } from "./pages/Counter";
// import Products from "./pages/Products";
// import Product from "./pages/Product";

// React Routing-2
// import Homes from "./ReactRouting-2/pagesRout-2/Homes";
// import Logins from "./ReactRouting-2/pagesRout-2/Logins";
// import Nitesh from "./ReactRouting-2/pagesRout-2/Nitesh";
// import RequiredAuth from "./ReactRouting-2/components/RequiredAuth";

// import { useContext, useEffect } from "react";
// import { Authcontext } from "./ReactRouting-2/context/AuthContext";


// import Navbar from "./portfolio/Navbar";
// import Home from "./portfolio/Home"
// import About from "./portfolio/About";
// import Button from "./portfolio/Button";
// import Cart from "./portfolio/Cart";
// import Mobile from "./portfolio/Mobile";
// import Shoes from "./portfolio/Shoes";

// import Form from "./practice/Form";

// import { Counter } from "./redux-3/p-2/counter/Counter";
// import { Todo } from "./redux-3/p-2/todo/Todo";

// import { Todo } from "./redux-3/p-3/components/todo/Todo";
// 
// redux4
// import { Counter } from "./redux-4/Counter/Counter";
// server
import { Todo } from "./redux-4/Server/todo/Todo";


function App() {
  // const { token } = useContext(Authcontext);
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!token){
  //     navigate("/login");
  //   }
  //   else{
  //     navigate(location.state);
  //   }
  // }, [token])

  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/home");
  // }, []);
  return (
    <div className="App">
      {/* <h1>Mobile Operating Systems</h1>
      <StaticCard/>
      <h1>Mobile Manufacturers</h1>
      <StaticCard1/> */}
      {/* <TodoList/> */}
      {/* <Todos /> */}
{/* 
      <Navbar />
       <Routes>
         <Route path="home" element={<Home />} />
        <Route path="login/*" element={<Login />}>
           <Route path="Sign-in" element={<SignIn />} />
           <Route path="Sign-up" element={<Signup />} />
           <Route path="google" element={<SignGoogle />} />
         </Route>
         <Route path="about" element={<About />} />
         <Route path="counter/:initialCount" element={<Counter />} />
        <Route path="products/*" element={<Products />}>
           <Route path="id" element={<Product />} />
         </Route>
       </Routes> */}

      {/* React Rout2 */}
      {/* <Routes>
          <Route path="login" element={<Logins/>} />
          <Route path="/" element={<Homes/>} />
          <Route 
          path="Nitesh" 
          element={
            <RequiredAuth>
              <Nitesh/>
            </RequiredAuth>
          }
          />
        </Routes> */}
          
        {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/click" element={<Button/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/mobile" element={<Mobile/>}/>
        </Routes> */}

        {/* practice */}
        {/* <Form/> */}

         {/* <Counter/>
        <hr/>
        <Todo/>  */}

        {/* <Todo/> */}

        {/* redux4 */}
        {/* <Counter/> */}

        {/* server */}
        <Todo/>
    </div>
  );
}

export default App;
