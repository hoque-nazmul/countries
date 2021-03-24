import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import './SingleCountry.scss';

const SingleCountry = ({ country }) => {
  const { name, capital, area, population, flag } = country;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <div className="country-name" onClick={handleShow}>
            <h4>{name}</h4>
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{ name }</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={flag} alt={name} width="160px" height="100px"/>
              <p className="mb-0 mt-3">Capital: {capital}</p>
              <p className="mb-0">Area: {area}</p>
              <p className="mb-0">Population: {population}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
};

export default SingleCountry;      