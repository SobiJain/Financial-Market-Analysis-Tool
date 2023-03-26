import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/ButtonC";


const Verify = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams)
  const navigate = useNavigate();

  useEffect(() => {

    const verificationObj = {
      email: searchParams.get("email"),
      otp: searchParams.get("otp"),
    };

    console.log(verificationObj);

    const url = "http://127.0.0.1:8000/verify";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verificationObj),
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Verification Failed Please Try again");
        }
        else {
          alert("Verification Successful ");
        }
        return response.json();
      })
      .then((data) => {
        navigate('/login');
      });
  });

  return (
        <div className="session">
        <div className="left">
          {/*?xml version="1.0" encoding="UTF-8"?*/}
          <svg enableBackground="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n          .st01 {\n            fill: #fff;\n          }\n        " }} />
            <path className="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
          </svg>
        </div>
        <form action className="log-in" autoComplete="off">
          <h4>We are <span>MARKET ANALYZERS</span></h4>
          <Button type="button">We're redirecting you to the login page in a short while</Button>
        </form>
      </div>
  );
};

export default Verify;
