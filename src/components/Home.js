import About from "./About";
import Button from "./Button";
import Footer from "./Footer";
import ReusableButton from "./ReusableButton";
import Header from "./reusablecomponents/Header";
import TodoApp from "./TodoApp";

const Home = () => {
    return ( 
      
      <div className="container">
          <h1> Home</h1>
          <p> This is Home Page</p>
          <ReusableButton> Home Page Button </ReusableButton>
          <About />
          <ReusableButton> About Page </ReusableButton>
          <TodoApp />
          <Footer />
      </div>
    );  
};

export default Home;

