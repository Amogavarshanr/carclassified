import React from "react";
import "../../styles/find-car-form.css";

import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Location" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Benz</option>
            <option value="non-ac">Audi</option>
            <option value="non-ac">Tesla</option>
            <option value="non-ac">Toyota</option>
            <option value="non-ac">BMW</option>
            <option value="non-ac">Ferrari</option>
            <option value="non-ac">Lamborgini</option>
          </select>
        </FormGroup>

        
        <FormGroup className="select__group">
          <select>
            <option value="ac">petrol</option>
            <option value="non-ac">Diesel</option>
            <option value="non-ac">Electric</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;