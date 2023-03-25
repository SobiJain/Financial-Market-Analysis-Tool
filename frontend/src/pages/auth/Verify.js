import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



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
    <div>
      <h1>Verified Succesfully! Returning to home page</h1>
    </div>
  );
};

export default Verify;
