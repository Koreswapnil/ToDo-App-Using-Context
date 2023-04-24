import {Link} from 'react-router-dom';

const Home =()=>{
    return(
        <div className="home-container">
            <h1>My ToDO List App</h1>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>SignUp</button></Link>
            <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
    )  
}

export default Home;