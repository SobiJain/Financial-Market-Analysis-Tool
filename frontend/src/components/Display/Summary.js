import Button from "../UI/ButtonC";
import Card from "../UI/Card";
import DateTime from "./Date";
import { useState } from "react";
import CardTable from "../UI/CardTable";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { useEffect } from "react";

const Test = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);
    let auth = useSelector((state) => state.auth);
    //temporary change function
    const [initial, setInitial] = useState(localStorage.getItem('state')==='true'? '+ FOLLOW': '- UNFOLLOW');
    // const [wishItem, setWishItem] = useState({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem('state')})
    console.log(localStorage.getItem("state"))

    const Onchange = () =>  {
        const url = "http://127.0.0.1:8000/wishlist"
        if(localStorage.getItem('state')==='true') {
            // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'false'})
            console.log(initial)
            const wishItem = {'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'true'};
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wishItem),
            })
            .then(response=>{
                if(response.status!==200) {
                    console.log(response.error)
                    toast.error("Already in wishlist")
                    setInitial('- UNFOLLOW')
                    localStorage.setItem('state', 'false')
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                }
                else {
                    toast.success("Added to wishlist successfully");
                    setInitial('- UNFOLLOW')
                    localStorage.setItem('state', 'false')
                    console.log(auth)
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                    }
                    return response.json()
                });
        }
        else
        {
            // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'true'})
            console.log(initial)
            const wishItem = {'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'false'};
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wishItem),
            })
            .then(response=>{
                if(response.status!==200) {
                    setInitial('+ FOLLOW')
                    localStorage.setItem('state', 'true')
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                    toast.error("Never was in Wishlist")
            }
            else {
                setInitial('+ FOLLOW')
                localStorage.setItem('state', 'true')
                console.log(auth)
                toast.success("Removed from wishlist successfully ");
                // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                }
                return response.json()
            });
        }
        // setInitial(initial === '+ FOLLOW' ? '- UNFOLLOW' : '+ FOLLOW')
    }

// the if statement is responsible for rendering the Card component only if the state of isLoading is false, i.e when the entire data of the company is fetched
    if (!isLoading)
        return <Card>
            <div style={{ display: 'flex' }}>
                <div style={{ flexBasis: '70%' }}>
                    <div >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ flexBasis: '20%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexBasis: '40%', paddingLeft: '1.5%' }}>  <h1> {companyData.companyData.profileDataResult.Name} </h1> </div>
                                    <div style={{ flexBasis: '20%', paddingLeft: '10%' }}>
                                        <h5 style={{ marginTop: "2px" }}> <DateTime /> </h5></div>
                                </div>
                            </div>
                            <div style={{ flexBasis: '20%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexBasis: '17%' }}>
                                        <a href="https://www.nseindia.com/get-quotes/equity?symbol=AXISBANK" target="_blank" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                            Ticker: {companyData.companyData.profileDataResult.Symbol}
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div style={{ flexBasis: '50%', }}>
                                <CardTable></CardTable>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flexBasis: '30%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flexBasis: '20%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {/* <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                    <Button>
                                        EXPORT TO EXCEL
                                    </Button>
                                </div> */}
                                {auth.isAuthenticated && localStorage.getItem('email')!=='' &&
                                    <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                        <Button onClick={Onchange}>
                                            {localStorage.getItem('state')==='true'? '+ FOLLOW': '- UNFOLLOW'}
                                        </Button>
                                    </div>
                                }
                                
                            </div>
                        </div>
                        <div style={{ flexBasis: '20%', color: 'white' }}> dnjkdnvjjsvd </div>
                        <div style={{ flexBasis: '60%' }}>
                            <p>
                                ABOUT<br></br>
                                {companyData.companyData.profileDataResult.Description}
                                desc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

}

export default Test;