
import loader from '../assets/img/loader.svg'
const FullScreenLoader = () => {
    return (
        <div>
            <div style={{zIndex:"100",position:"fixed",marginTop:"100px"}} className="container-fluid bg-white">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <img className="w-100" src={loader}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FullScreenLoader;