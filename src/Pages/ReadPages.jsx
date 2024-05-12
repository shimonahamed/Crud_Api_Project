import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import FullScreenLoader from "../loaderPage/FullScreenLoader.jsx";



const ReadPages = () => {
    const [ProductData,setProductData]=useState([])
    const [refresh,setrefresh]=useState(0)
    const [Loading,SetLoading]=useState(false)

    useEffect(() => {
        callData()
    }, []);

    const callData=async ()=>{
        SetLoading(true)
        let res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
        console.log(res)
        let productList=res.data['data']
        setProductData(productList)
        SetLoading(false)
    }

    const onClickDelete=async (id)=>{
        SetLoading(true)
        let res=await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`)
        let deleteProduct=res.data['status']
        if (deleteProduct === "success"){
            toast.success("Delete success")
            // setrefresh(refresh + 1) or
            callData()
        }else {
            SetLoading(false)
            toast.error("Delete Fail")

        }
    }
    return (
        <>
            {Loading && <FullScreenLoader/>}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => setrefresh(refresh + 1)} className="btn btn-secondary">Refresh
                            </button>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <tbody>
                                    {
                                        ProductData.length > 0 &&
                                        ProductData.map((item, i) => {
                                            return (

                                                <tr>
                                                    <td>{item["_id"]}</td>
                                                    <td>{item["ProductName"]}</td>
                                                    <td>{item["ProductCode"]}</td>
                                                    <td><img style={{width: "20px", height: "20px"}} src={item["Img"]}/>
                                                    </td>
                                                    <td>{item["UnitPrice"]}</td>
                                                    n<td>{item["Qty"]}</td>
                                                    <td>{item["TotalPrice"]}</td>
                                                    <td>{item["CreatedDate"]}</td>
                                                    <button onClick={() => onClickDelete(item["_id"])}
                                                            className="btn btn-danger">Delete
                                                    </button>
                                                </tr>


                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>


    );
};

export default ReadPages;