import logo from './assets/images/logo.jpg';

const DefaultPage = () => {
    return (
        <div>
            {/* Start Home Section */}
            <div id="home">
                {/* Navigation */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="navbar-brand">
                        <img className='rounded-circle' src={logo} alt='snap taxi' />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-itam">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-itam">
                                <a className="nav-link" href="#course">My Page</a>
                            </li>
                            <li className="nav-itam">
                                <a className="nav-link" href="#features">All Users</a>
                            </li>
                            <li className="nav-itam">
                                <a className="nav-link" href="#resources">Posts</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* End Navigation */}
                {/* Start Landing Page Section */}
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner" />
                    </div>
                </div>
                <div className="caption text-center">
                    <h1>Welcome to Snap Taxi</h1>
                    <a href="#" className="btn btn-outline-light btn-lg">Signing</a>
                </div>   {/* End Landing Page Section */}
            </div>
            {/* End Home Section */}
        </div>



    )
}

export default DefaultPage