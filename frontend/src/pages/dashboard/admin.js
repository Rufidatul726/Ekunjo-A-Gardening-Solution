import React, { useState } from "react";
import { useEffect } from "react";

export default function Admin() {
    const [newSP, setNewSP] = useState([]);
    const [spId, setSpId] = useState([]);
    const [spName, setSpName] = useState([]);
    const [spPhone, setSpPhone] = useState([]);
    const [serviceProviders, setServiceProviders] = useState([{
        id: spId,
        name: spName,
        phone: spPhone,
    }]);

    useEffect(() => {
        const getServiceProviders = async () => {
            const res = await fetch("http://localhost:5656/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const serviceProvidersFromServer = await res.json();
            const tempsp = serviceProvidersFromServer[0].user;
            setSpId(tempsp.receiverId);
            setSpName(tempsp.username);
            setSpPhone(tempsp.phone);
            setServiceProviders(serviceProvidersFromServer);

            console.log(serviceProviders);
        };

        getServiceProviders();
    }, []);
    
    const handleSPSubmit = async (e) => {
        e.preventDefault();

        setServiceProviders([...serviceProviders, newSP]);
        console.log(serviceProviders);
        // const res = await fetch('http://localhost:5656/admin', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         newSP,
        //     }),
        // });
        // const data = await res.json();
        //console.log(data);
        //setServiceProviders([...serviceProviders, data]);
    };

    const handleInputChange = (e) => {
        setNewSP(e.target.value);
        console.log(newSP);
    };

    const handleChange = (e) => {
         const searchItem = e.target.value;
        if(searchItem === spPhone) {
            console.log("found");
            
        }
        else {
            console.log("not found");
        }
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">            
            <h1>Welcome</h1>
            <div>
                <div class="event-schedule-area-two bg-color pad100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title text-center">
                                    <div class="title-text mb-6">
                                        <h2>Mahmudul Alam</h2>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div className="serach-box">
                                    <form className="form-inline">
                                        <label><h3>Search for a service provider</h3></label>
                                        <input type="text" placeholder="Enter phone number"  onChange={handleChange} className="form-control" />
                                    </form>
                                </div>
                            </div>
                        </div>                  
                    
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade active show" id="home" role="tabpanel">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center" scope="col">Serial</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Phone number</th>
                                                        <th scope="col">Remove</th>
                                                    </tr>
                                                </thead>
                                                {
                                                    spId.map((sp, index) => (
                                                        <tbody>
                                                            <tr class="inner-box">
                                                                <th scope="row">
                                                                    <span>{index+1}</span>
                                                                </th>
                                                                <td>
                                                                    <div class="event-wrap">
                                                                        <span>{spName}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="r-no">
                                                                        <span>{spPhone}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="primary-btn">
                                                                        <a class="btn btn-primary" href="#">
                                                                            <i class="fas fa-minus">
                                                                                <img src="https://img.icons8.com/ios/50/000000/minus.png"/>
                                                                            </i>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    ))
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="primary-btn text-center">
                                <form onSubmit={handleSPSubmit} className="form-inline">
                                    <label><h2>Add a new service provider</h2></label>
                                    <input type="text" placeholder="Enter phone number"  value={newSP}
                                    onChange= {handleInputChange} name="phone" />
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
