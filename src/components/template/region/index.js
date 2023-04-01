import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from '../../atom/button';
import { ModalView } from '../../molecule/modal';
import axios from "axios";
import { useState, useEffect } from "react";
import API from '../../services/region';
import Swal from "sweetalert2";

function Region(props){
    let style = {
        "borderRadius": "12px"
    }
    const [alldataRegion, setallRegion] = useState(null);
    const [methodReq, setMethodReq] = useState("");
    const [regById, setRegionById] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => {
      setShowModal(true);
      setMethodReq("post");
    };
    useEffect(() => {
      getAllRegion();
    }, []);

    const getAllRegion = async () => {
      const response = await API.getAllRegion();
      setallRegion(response.data);
	};
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          API.deleteRegion(id).then((res) => {
            Swal.fire({
              icon: "success",
              title: "Berhasil!",
              text: "Data berhasil dihapus!",
            }).then(() => {
              window.location.reload();
            })
          });
        }
      });
    };


    return (
        <div className="container">
        <h2>Welcome</h2>
        <h3>Region Page</h3>
        <Button className="btn btn-success" {...style} onclick={handleShow}>
				Add new data
			</Button>        
      <p>Data region </p>
        <table id="myTable" className="display table md-data-table">
          <thead>
            <tr>
              <th>Nomor</th>
              <th hidden>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {alldataRegion &&
						alldataRegion.data.map((item, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
                  <td hidden>{item.id}</td>
									<td>{item.name}</td>
									<td>
										<Button
											className="btn btn-primary"
											onclick={() => {
												setShowModal(true);
												setMethodReq("put");
												axios
													.get(`http://localhost:8088/api/region/${item.id}`, {
														responseType: "json",
													})
													.then((res) => {
														setRegionById(res.data);
													})
													.catch((err) => {
														console.log(err);
													});
											}}
										>
											Edit
										</Button>
										<Button className="btn btn-danger" onclick={() => handleDelete(item.id)}>
											Delete
										</Button>
									</td>
								</tr>
							);
						})}
          </tbody>
        </table>
        <ModalView
				show={showModal}
				hide={handleClose}
				regById={regById}
				methodReq={methodReq}
			/>
      </div>
    )
}

export default Region;