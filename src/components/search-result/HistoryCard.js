import React from "react";
import "./searchResult.css";
import { Row, Col } from "react-bootstrap";
import { formatDateTime } from "../../utils/helper";


function HistoryCard(props) {
  const { result, searchAgain, deleteRecord } = props;

  const location = result.location;
  const datetime = result.datetime;
  const id = result.id;

  function searchRecord() {
    searchAgain(location);
  }

  function deleteThis() {
    deleteRecord(id);
  }

  return (
    <div className="history-card">
      <Row className="align-items-center">
        <Col md={6} sm={6} xs={9}>
          <span className="text black-text">{location}</span>
          <span className="text black-text extra-small-text d-block d-md-none">
            {formatDateTime(datetime)}
          </span>
        </Col>

        <Col md={6} sm={6} xs={3} className="text-end">
          <div className="d-flex justify-content-end align-items-center">
            <span className="datetime-text small-text black-text d-none d-md-inline">
              {formatDateTime(datetime)}
            </span>
            <button className="editBtn d-flex justify-content-center align-items-center" onClick={searchRecord}>
              <span className="material-symbols-outlined">search</span>
            </button>

            <button onClick={deleteThis} className="editBtn ms-2 d-flex justify-content-center align-items-center">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryCard;
