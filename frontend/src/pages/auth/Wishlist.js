import Card from "../../components/UI/Card";
import '../../components/Display/QuaterlyResults.css'


const Wishlist = () => {
    let roeList = []
    fetch("http://127.0.0.1:8000/getwishlist?" + new URLSearchParams({
            email: localStorage.getItem("email")
        }))
        .then((response) => response.json())
        .then((user) => {
            let wishlist = JSON.parse(user)
            for(var i=0;i<wishlist.length;i++) {
                roeList.push({roe:wishlist[i].fields.item})
            }
        });
    console.log(roeList)
    return <Card>
            <div class="flex-containerrs">
                <div class="col-1rs">
                    <h2 style={{ marginLeft: '1.5%', paddingTop: '1.5%' }}>Wishlists</h2>
                </div>
                <div class="col-3rs">
                    <table>
                            {roeList.map((item) => {
                                return <tr><td> {item.roe} </td> </tr>
                            
                            })}
                    </table>

                </div>
                    <h6> </h6>
                <div class="col-4rs">
                            <h6 style= {{color: 'white'}}>hbhdbcjbdj</h6>
                </div>
            </div>
        </Card>
}


export default Wishlist;