import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";

function Login() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div class="container">
      <Card style={{ width: "600px" }}>
        <Card.Header>
          {!login && (
            <FacebookLogin
              appId="111618935219639"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          )}
          {login && <Image src={picture} roundedCircle />}
        </Card.Header>
        {login && (
          <Card.Body>
            <Card.Text>{data}</Card.Text>
          </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default Login;
