import { Email } from "../components/Email"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Verify = ()=>{
    return (
        <div className="flex flex-col items-center">
            <Navbar/>
            <Email/>
            <Footer/>
        </div>
    )
}