import 'bootstrap';
import { Label } from '../../atom/label';
import { Input } from '../../atom/input';

import { useState } from "react";
import Swal from "sweetalert2";
import API from '../../../services/region';
import { Modal, Form, Button } from "react-bootstrap";

export function ModalView({show, hide, regById, methodReq, httpStatus}){
  const [name, setName] = useState("");
  const [closeModalAfterInsert, setCloseModalAfterInsert] = useState(true);
  const handleClose = () => {
	// window.location.reload();
	hide();

  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handleSubmit = (e) => {
		e.preventDefault();

		if (methodReq === "post") {
    //   console.log(name)
			API.saveRegion(name)
				.then((res) => {
					hide();
					setName("");
					Swal.fire({
						icon: "success",
						title: "Berhasil!",
						text: "Data berhasil ditambahkan!",
					})
					httpStatus(res.status);
				})
				.catch((err) => {
					console.log(err);
				});
    }else if (methodReq === "put") {
			API.updateRegion(regById.data.id, {name}).then((res) => {
				hide();
				// setCloseModalAfterInsert(false);
				setName("");
				Swal.fire({
					icon: "success",
					title: "Berhasil!",
					text: "Data berhasil diubah!",
				}).then(() =>{
				 });
					httpStatus(res.status);
				
			})
			.catch((err) =>{
				console.log(err);
			})
		}
	};


    return(
    <Modal show={closeModalAfterInsert ? show : closeModalAfterInsert} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Manage data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{regById && regById ? (
					<Form onKeyDown={handleKeyDown}>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Region Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue={regById.data.name}
								// value={empById.data.fullname || ""}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
					</Form>
				) : (
					<Form onKeyDown={handleKeyDown}> 
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Region Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert new Region Name"
								name="getname"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
					</Form>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={handleSubmit} type="submit">
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
  }