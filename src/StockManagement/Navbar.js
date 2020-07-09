import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Redirect, useHistory } from 'react-router-dom'
import { SMSContext } from '../ContextAPI/SMSContext'
import firebase from '../firebase/config'
import '../CSS/Navbar.css'

const Navbar = () => {
    const {
        state: {
            status,
            currentUser,
            totalAmount
        },
        startSearch,
        handleInput
    } = useContext(SMSContext)

    /*                     Sign in and Sign out Configuration set up                       */
    const [cU, setCU] = useState('');
    useEffect(() => {
        firebase.getUser().then(user => {
            if (user) {
                setCU(user)
                // setUserState(user);
                // setUserEmail(user.email);
            }
        });
    });

    // for redirecting to home page on logout
    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }


    const [name, setName] = useState("");
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const [routeRedirect, setRouteRedirect] = useState(false);
    const [routeRedirectReg, setRouteRedirectReg] = useState(false);
    let loginAlert;
    let regAlert;
    // async function login() {
    // 	try {
    // 		await firebase.login(email, password)
    //         setRouteRedirect(true)
    //alert(name + " are Registered !!")
    // 	} catch(error) {
    // 		alert(error.message)
    // 	}
    // }
    // async function onRegister() {
    // 	try {
    // 		await firebase.register(name, email, password)
    //         setRouteRedirectReg(true)
    // alert(name + " are Registered !!")
    // 	} catch(error) {
    // 		alert(error.message)
    // 	}
    // }
    async function onRegister() {
        try {
            await firebase.register(name, email, password, phonenumber)

            alert(name + " you are Registered !!")
        } catch (error) {
            alert(error.message)
        }
    }
    const login = async (e) => {
        e.preventDefault();
        let response = await firebase.login(email, password);
        if (response.hasOwnProperty("message")) {
            alert("Password does not match !!")
            alert(response.message);
        } else {
            setUser("name");
            alert(" You are Logged In");

        }
    }

    // const loginUser = routeRedirect;
    // if (loginUser) {

    //     return <Redirect to="/" />
    // }
    // const register = routeRedirectReg;
    // if (register) {
    //     setUser(name);
    //     return <Redirect to="/" />
    // }
    const logout = () => {
        firebase.logout();
        setUser("");
        //setRouteRedirect(true)
        routeChange();
    }
    // const logOut = routeRedirect;
    // if (logOut) {
    //     setUser(name);
    //     return <Redirect to="/" />
    // }



    return (
        <div>
            {/* <pre>
               {JSON.stringify(cU,null,4)}
               {JSON.stringify(phonenumber,null,4)}
           </pre>  */}

            <header class="" id="stick">
                <nav class=" navbar navbar-expand-lg navbar-light lighten-5 mb-4">
                    <Link to="/"><a class=" navbar-brand ml-5" href="#"><img src="https://zerodha.com/static/images/logo.svg" height="18px" width="130px" /><span></span></a></Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>


                    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                {!user ? (
                                    <>
                                        <a class="nav-link link" href="#" data-toggle="modal" data-target="#frameModalBottom">Home <span class="sr-only">(current)</span></a>
                                    </>
                                ) : (
                                        <>
                                            <Link to="/"><a class="nav-link link" href="#">Home <span class="sr-only">(current)</span></a></Link>

                                        </>
                                    )}
                            </li>
                            <li class="nav-item">
                                {!user ? (
                                    <>
                                        <a class="nav-link link" href="#" data-toggle="modal" data-target="#frameModalBottom">Stocks <span class="sr-only">(current)</span></a>
                                    </>
                                ) : (
                                        <>
                                            <Link to="/stocks"><a class="nav-link link" href="#">Stocks</a></Link>

                                        </>
                                    )}
                            </li>
                            <li class="nav-item">
                                {!user ? (
                                    <>
                                        <a class="nav-link link" href="#" data-toggle="modal" data-target="#frameModalBottom">Positions <span class="sr-only">(current)</span></a>
                                    </>
                                ) : (
                                        <>
                                            <Link to="/positions"><a class="nav-link link" href="#">Positions</a></Link>

                                        </>
                                    )}
                            </li>
                            <li class="nav-item dropdown">
                                {!user ? (
                                    <>
                                        <a class="nav-link dropdown-toggle link" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">More</a>
                                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                            <Link to="/funds"><a class="dropdown-item" href="#">Funds</a></Link>
                                            <Link to="/atfirst" ><a class="dropdown-item" href="#">At First</a></Link>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#frameModalBottom">Something else here</a>
                                        </div>
                                    </>
                                ) : (
                                        <>
                                            <a class="nav-link dropdown-toggle link" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">More</a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <Link to="/funds"><a class="dropdown-item" href="#">Funds</a></Link>
                                                <a class="dropdown-item" href="#">At First</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </>
                                    )}

                            </li>
                        </ul>
                        <div className="search  " >
                            <form class="md-form form-inline ">
                                <input class="form-control" id="search" type="search" placeholder="Search" aria-label="Search" onChange={handleInput} /><Link to="/filter"><span onClick={startSearch} style={{ cursor: 'pointer', color: '#387ED1' }}><i class="fas fa-search"></i></span></Link>

                                {!user ? (
                                    <>
                                        <button type="button" class="btn btn-sm btn-rounded waves-effect" style={{ borderRadius: '30px', backgroundColor: '#387ED1', color: 'white' }} data-toggle="modal" data-target="#signUp" >SIGN UP</button>
                                        <button type="button" class="btn btn-sm btn-rounded waves-effect" style={{ borderRadius: '30px', backgroundColor: '#387ED1', color: 'white' }} data-toggle="modal" data-target="#signIn" >SIGN IN</button>
                                    </>
                                ) : (
                                        <>
                                            <ul className="navbar-nav">
                                                <li class="nav-item dropdown mt-n1">
                                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-user " style={{ color: '#387ED1' }}></i> <span className="font-weight-bold">{cU.displayName}</span> </a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#myaccount" >My account</a>
                                                        <a class="dropdown-item" href="#" onClick={logout}>Log out</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </>
                                    )}

                            </form>
                        </div>
                    </div>
                </nav>
                {loginAlert}
                {regAlert}
                <a class="" href="#stick"><div class="top rounded-circle"><i class="fas fa-hand-point-up" ></i></div><br /></a>
                <p className="font-weight-bold top1">Go to Top</p>
                {/* modal for sign in */}
                <div>
                    <div class="modal fade right" id="signIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog cascading-modal modal-info" role="document">
                            {/* <!--Content--> */}
                            <div class="modal-content">
                                {/* <!--Header--> */}
                                <div class="modal-header info-color text-center">
                                    <h4 class="modal-title text-white w-100 font-weight-bold py-2">Sign In</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" class="text-white">&times;</span>
                                    </button>
                                </div>

                                {/* <!--Body--> */}
                                {/* <div class="modal-body">
                                            <div class="md-form mb-5">
                                            <i class="fas fa-user prefix grey-text"></i>
                                            <input type="text" id="form3" class="form-control validate" />
                                            <label data-error="wrong" data-success="right" for="form3">Your name</label>
                                            </div>

                                            <div class="md-form">
                                            <i class="fas fa-envelope prefix grey-text"></i>
                                            <input type="email" id="form2" class="form-control validate" />
                                            <label data-error="wrong" data-success="right" for="form2">Your email</label>
                                            </div>
                                        </div> */}
                                <div class="modal-body mb-1">
                                    <div class="md-form form-sm mb-5">
                                        <i class="fas fa-envelope prefix"></i>
                                        <input type="email" id="email" name="email" class="form-control form-control-sm validate" onChange={(e) => setEmail(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
                                    </div>

                                    <div class="md-form form-sm mb-4">
                                        <i class="fas fa-lock prefix"></i>
                                        <input type="password" id="modalLRInput11" class="form-control form-control-sm validate" onChange={(e) => setPassword(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>
                                    </div>
                                    <div class="text-center mt-2">
                                        <button class="btn btn-info" style={{ borderRadius: '30px' }} onClick={login} data-dismiss="modal" >Sign in </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center"><span className="text-center font-weight-bold">OR</span></div>
                                    <div className="ml-3 mb-2">
                                        <p className="text-center"> Login with </p>
                                        <div className="d-flex justify-content-center">
                                            {/* <button type="button" class="btn btn-primary round-button px-3"><i class="fab fa-facebook" style={{}} aria-hidden="true"></i></button>
                                            <button type="button" class="btn btn-primary rounded px-3"><i class="fab fa-facebook" aria-hidden="true"></i></button>
                                            <button type="button" class="btn btn-primary rounded px-3"><i class="fab fa-facebook" aria-hidden="true"></i></button>
                                            <button type="button" class="btn btn-primary rounded px-3"><i class="fab fa-facebook" aria-hidden="true"></i></button> */}
                                            <a href="#" class="fa fa-facebook mr-1"></a>
                                            <a href="#" class="fa fa-twitter mr-1"></a>
                                            <a href="#" class="fa fa-google mr-1"></a>
                                            <a href="#" class="fa fa-linkedin mr-1"></a>
                                        </div>

                                    </div>
                                </div>
                                {/* <!--Footer--> */}
                                <div class="modal-footer justify-content-center">
                                    <p>Not a member? <a href="#" class="blue-text" data-toggle="modal" data-target="#signUp" data-dismiss="modal">Sign Up</a></p>                                        </div>
                            </div>
                            {/* <!--/.Content--> */}
                        </div>
                    </div>
                </div>
                {/* modal for sign up */}
                <div>
                    <div class="modal fade left" id="signUp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog cascading-modal modal-left modal-info" role="document">
                            {/* <!--Content--> */}
                            <div class="modal-content">
                                {/* <!--Header--> */}
                                <div class="modal-header info-color text-center">
                                    <h4 class="modal-title text-white w-100 font-weight-bold py-2">Sign Up</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" class="text-white">&times;</span>
                                    </button>
                                </div>

                                {/* <!--Body--> */}
                                {/* <div class="modal-body">
                                            <div class="md-form mb-5">
                                            <i class="fas fa-user prefix grey-text"></i>
                                            <input type="text" id="form3" class="form-control validate" />
                                            <label data-error="wrong" data-success="right" for="form3">Your name</label>
                                            </div>

                                            <div class="md-form">
                                            <i class="fas fa-envelope prefix grey-text"></i>
                                            <input type="email" id="form2" class="form-control validate" />
                                            <label data-error="wrong" data-success="right" for="form2">Your email</label>
                                            </div>
                                        </div> */}
                                <div class="modal-body">
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix "></i>
                                        <input type="text" id="name" name="name" class="form-control validate" onChange={(e) => setName(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Your Name</label>
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-phone-alt prefix "></i>
                                        <input type="text" id="phoneNumber" name="phoneNumber" class="form-control validate" onChange={(e) => setPhonenumber(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="phoneNumber">Your Phone Number</label>
                                    </div>
                                    <div class="md-form form-sm mb-5">
                                        <i class="fas fa-envelope prefix"></i>
                                        <input type="email" id="email" name="email" class="form-control form-control-sm validate" onChange={(e) => setEmail(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
                                    </div>

                                    <div class="md-form form-sm mb-5">
                                        <i class="fas fa-lock prefix"></i>
                                        <input type="password" id="password" name="password" class="form-control form-control-sm validate" onChange={(e) => setPassword(e.target.value)} />
                                        <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>
                                    </div>

                                    <div class="text-center form-sm mt-2">
                                        <button class="btn btn-info" style={{ borderRadius: '30px' }} onClick={onRegister} data-dismiss="modal" >Sign Up </button>
                                    </div>

                                    {/* <!--Footer--> */}
                                    <div class="modal-footer justify-content-center">
                                        <p class="pt-1">Already have an account? <a href="#" class="blue-text" data-dismiss="modal" data-toggle="modal" data-target="#signIn" >Sign In</a></p>      </div>
                                </div>
                                {/* <!--/.Content--> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* login please modal */}

                <div class="modal fade bottom" id="frameModalBottom" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">

                    {/* <!-- Add class .modal-frame and then add class .modal-bottom (or other classes from list above) to set a position to the modal --> */}
                    <div class="modal-dialog modal-frame modal-bottom" role="document">


                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="row d-flex justify-content-center align-items-center">

                                    <p class="pt-3  pr-2 font-weight-bold" >Login and explore the site !!
                                    </p>
                                    <div className="">
                                        <button type="button" class="btn " style={{ backgroundColor: '#387ED1', color: 'white' }} data-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*              Modal for MY Account                         */}
                <div>
                    <div class="modal fade right" id="myaccount" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">

                        <div class="modal-dialog modal-full-height modal-right" role="document">


                            <div class="modal-content">
                                <div class="modal-header warning-color text-center white-text">
                                    <h4 class="modal-title w-100 font-weight-bold" id="myModalLabel">My Account</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body bg-light">
                                    <div className="p-2 text-wite m-2 bg-white shadow myUser">
                                        <h3 className="font-weight-bold ">User Details:</h3>
                                    </div>
                                    <div>
                                        <ul class="list-group">
                                            <li class="list-group-item myList ">
                                                <span> <i class="fas fa-user mr-1"></i>Name</span>

                                                <span class="text-muted  float-right">{cU.displayName}</span>
                                            </li>
                                            <li class="list-group-item myList ">
                                                <span>
                                                    <i class="fas fa-envelope mr-1"></i>  Email Id

                                                </span>
                                                <span class="text-muted  float-right">{cU.email}</span>
                                            </li>
                                            <li class="list-group-item myList ">
                                                <span>  <i class="fas fa-phone-alt mr-1"></i>  Phone Number </span>

                                                <span class="text-muted  float-right">{cU.phoneNumber}</span>
                                            </li>
                                            <li class="list-group-item myList ">
                                                <span> <i class="fas fa-rupee-sign mr-1"></i> Funds </span>

                                                <span class="text-muted  float-right">{totalAmount}</span>
                                            </li>
                                            <li class="list-group-item myList ">
                                                <span><i class="fas fa-id-badge mr-1"></i> UID </span>

                                                <span class="text-muted  float-right">{cU.uid}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </header>

        </div>
    )
}

export default Navbar
