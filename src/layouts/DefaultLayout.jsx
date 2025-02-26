// importiamo da react-router-dom Outlet per il rendering delle rotte figlie 
import {Outlet} from "react-router-dom"

// importiamo Header
import Header from "./../components/Header"



export default function DefaultLayout() {
    return (
        <div>
            {/* componente Header visualizzato in tutte le pagine */}
            <Header/>
            {/* outlet renderizza il componente della rotta corrente  */}
            <Outlet/>
        </div>
    );
}