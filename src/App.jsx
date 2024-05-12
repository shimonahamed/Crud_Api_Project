import HeaderPages from "./Pages/HeaderPages.jsx";
import ReadPages from "./Pages/ReadPages.jsx";
import {Toaster} from "react-hot-toast";
import FullScreenLoader from "./loaderPage/FullScreenLoader.jsx";


const App = () => {
    return (
        <div>
            {/*<FullScreenLoader/>*/}
            <HeaderPages/>
            <ReadPages/>

            <Toaster/>
        </div>
    );
};

export default App;