import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navpofil() {
  const navigate = useNavigate()
  return (

   
    <div className="App">
         <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    
            <nav class="navbarawal">
                <div class="navbar-leftawal">
                    <div class="logoawal"><img src="/logo/logonavbar.png"/>ArtsyMe</div>
                    <Link to="/dashboard" class="nav-linkawal" style={{ marginLeft: '20px' }}>Dashboard</Link>
                    <Link to="/explore" class="nav-linkawal" style={{ marginLeft: '20px' }}>Explore</Link>
                </div>

                <div class= "navbar-centerawal">
                
                    <div class="search-containerawal">
                        <div class="search-boxawal">
                            <span class="search-iconawal"><img src = '/logo/iconsearch.png' /></span>
                            <input type="text" placeholder="Search design did u want ..." />
                        </div>
                    </div>
                

                </div>
                
                <div class="navbar-rightawal">
                  
                  
                    <Link to="/upload" class="nav-linkawal" style={{ marginRight: '25px' }}>Upload</Link>
                    <Link to="/job" class="nav-linkawal" style={{ marginRight: '25px' }}>Job</Link>
                    <Link to="/pagenot" style={{ marginRight: '15px' }}><img src="/icon/iconnotif.png"/ ></Link>
                    <Link to="/chating"style={{ marginRight: '15px' }}><img class = "chat" src="/icon/iconchat.png"/></Link>
                    <Link to="/Profilemy" style={{ marginRight: '25px' }}><img class ="profil" src="/images/profilnavbar.png"></img></Link>
                </div>
        </nav>
   
    </div>

    
  );
}

export default Navpofil;
