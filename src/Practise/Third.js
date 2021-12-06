import { UserConsumer,AgeConsumer } from "./Props";
import React,{ useContext} from "react";

function Third(){

    const username = useContext(UserConsumer);
    const age=useContext(AgeConsumer);
    return(
        <div>
            <h1> {username} of age {age}</h1>
            {/* <UserConsumer>
                {
                    (username)=>{
                        return <div> Hello {username}</div>
                    }
                }
            </UserConsumer> */}

        </div>
    );
}
export default Third;