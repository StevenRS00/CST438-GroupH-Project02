import logo from './logo.svg';
import './App.css';
import './css/Welcome.css';
function App() {
  return (
    <div className="landingPage text-center">
            <section className="text-light WelcomeCard1">
                <h1> Wishlist </h1>
                <h3 className="p-2"> Add gifts from any website. <br/> Share with anyone. </h3>
                <p className="text-muted"> Available now </p> 
                
                <form action="/login">
                    <button className="btn btn-primary">Log in</button>
                </form>
                
                <span className="text-muted largeFont">or</span>
                
                <form action="/register">
                    <button className="btn btn-primary">Register</button>
                </form>
            </section>
        </div>
  );
}

export default App;
