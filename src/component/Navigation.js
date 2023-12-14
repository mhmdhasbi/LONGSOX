import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const Navigation =() =>{
    const navigate = useNavigate()
    const accessToken = Cookies.get('accessToken')
    const handleLogout = () => {
        Cookies.remove('accessToken')
        window.location.reload()
    }
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">Longsox</a>
            <li className="ms-auto me-2 d-flex align-items-center d-lg-none">
                    <button className="BtnIcon mx-3">
                        <i class="bi bi-cart position-relative">
                            <div className="circleBadge position-absolute top-0 end-0"></div>
                        </i>
                    </button>
                </li>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <a className="nav-link mx-3 " aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-3" href="/category">
                Category</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-3" href="/product">Product</a>
                </li>
                
                <li className="d-lg-flex align-items-center d-none">
                    <button className="BtnIcon mx-3">
                        <a href="/cart">
                        <i class="bi bi-cart position-relative">
                            <div className="circleBadge position-absolute top-0 end-0"></div>
                        </i>
                        </a>
                        
                    </button>
                </li>
                
            </ul>
            <div className="d-flex btnWrapper mt-lg-0 mt-5">
                {accessToken !== undefined? <button className="w-100 secondaryBtn"><a className="nav-link mx-3" onClick={handleLogout} >Logout</a></button>:
                <>
                <button className="w-100 secondaryBtn"><a className="nav-link mx-3" href="/auth/login">Login</a></button>
                <button className="w-100 primaryBtn"><a className="nav-link mx-3" href="/auth/register">Register</a></button>
                </>
                
            }
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navigation