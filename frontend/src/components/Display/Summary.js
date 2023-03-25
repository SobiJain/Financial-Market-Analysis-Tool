import Button from "../UI/Button";
import Card from "../UI/Card";
import DateTime from "./Date";
import { useState } from "react";
import CardTable from "../UI/CardTable";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Test = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);
    let auth = useSelector((state) => state.auth);
    console.log(auth)

    //temporary change function
    const [initial, setInitial] = useState('+ FOLLOW');
    // const [wishItem, setWishItem] = useState({})
    const [wishItem, setWishItem] = useState({'email':localStorage.getItem("email"),'company':companyData.companyData.profileDataResult.Symbol, 'state':'true'})
    console.log(initial + JSON.stringify(wishItem))
    const Onchange = () =>  {
        const url = "http://127.0.0.1:8000/wishlist"
        if(initial==='+ FOLLOW') {
            // setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'true'})
            console.log(JSON.stringify(wishItem))
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
                    setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'false'})
            }
            else {
                toast.success("Added to wishlist successfully");
                setInitial('- UNFOLLOW')
                setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'false'})
                }
                return response.json()
            });
        }
        else
        {
            // setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'false'})
            console.log(JSON.stringify(wishItem))
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
                    setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'true'})
                    toast.error("Never was in Wishlist")
            }
            else {
                toast.success("Removed from wishlist successfully ");
                setInitial('+ FOLLOW')
                setWishItem({'email':localStorage.getItem("email"),"company":companyData.companyData.profileDataResult.Symbol, state:'true'})
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
                                    <div style={{ flexBasis: '20%' }}> <h5> ₹ not found </h5>
                                        <h5 style={{ marginTop: "-18px" }}> <DateTime /> </h5></div>
                                </div>
                            </div>
                            <div style={{ flexBasis: '20%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexBasis: '17%', paddingLeft: '1.5%' }}>
                                        <a href="https://www.axisbank.com/" target="_blank" style={{ paddingLeft: "1%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                            not found
                                        </a>
                                    </div>
                                    <div style={{ flexBasis: '17%' }}>
                                        <a href="https://https://www.bseindia.com/stock-share-price/axis-bank-ltd/AXISBANK/532215/.nseindia.com/get-quotes/equity?symbol=AXISBANK" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} target="_blank" rel="noreferrer">
                                            BSE:
                                        </a>
                                    </div>
                                    <div style={{ flexBasis: '17%' }}>
                                        <a href="https://www.nseindia.com/get-quotes/equity?symbol=AXISBANK" target="_blank" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                            NSE : {companyData.companyData.profileDataResult.Symbol}
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
                                {auth.isAuthenticated && wishItem.email!=='' &&
                                    <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                        <Button onClick={Onchange}>
                                            {initial}
                                        </Button>
                                    </div>
                                }
                                
                            </div>
                        </div>
                        <div style={{ flexBasis: '20%', color: 'white' }}> dnjkdnvjjsvd </div>
                        <div style={{ flexBasis: '60%' }}>
                            <p>
                                ABOUT [ edit ] <br></br>
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