import { useDispatch } from "react-redux";

// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
//   selectUser,
//   selectUserData,
// } from "../../redux/auth/authSlice";

import { doLogOut,  } from "../../redux/auth/authOps";
// import { selectToken } from "../../redux/auth/authSlice";
// import { auth } from "../../../firebase";
const Auth = () => {
  const dispatch = useDispatch();

  // const user = useSelector(selectUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const token = useSelector(selectToken);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (token !== null) {
  //     dispatch(fetchContacts());
  //   }
  // }, [token]);
  // useEffect(() => {
  //   const refreshUser = () => {
  //     const doRefreshUser = { password: password, email: email, name: name };
  //   };
  // }, [auth]);

  const logOut = () => {
    dispatch(doLogOut());
  };

  return (
    <>
      <p>amobus@mail.com</p>
      <button onClick={logOut}>Log Out</button>
      {/* <div>
        {" "}
        <h1>Registration </h1>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <div className="inputBox">
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
        </div>
      </div> */}
    </>
  );
};

export default Auth;
