import React from "react";
import { Col, Container } from "react-bootstrap";
import { Formik, ErrorMessage, FastField } from "formik";
import { Button, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import TextError from "./TextError";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

const Form2 = () => {
  const initialValues = {
    textField: [
      {
        fullName: "",

        email: "",
        message: "",
      },
    ],
  };

  const validationSchema = Yup.object({
    textField: Yup.array().of(
      Yup.object().shape({
        fullName: Yup.string().required("Required!"),
        email: Yup.string()
          .email("Invalid Email Format!!")
          .required("Required!!"),
        message: Yup.string().required("Write something"),
      })
    ),
    // phoneNum: Yup.string()
    //   .typeError("That doesn't look like a phone number")
    //   .matches(/^[0-9]+$/, 'Must be only digits')
    //   .min(8, 'Must be greater than 8 digits')
    //   .max(10, 'Must be lesser than 10 digits')
    //   .required('A phone number is required'),
  });
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (values, { resetForm }) => {
    if (value && values) {
      if (!disabled) {
        // alert('Success');
        setLoading(true);

        setMsg("")
          // axios
          //   .post('https://cdrskillassessment.cdrsites.rocks/api/tests', {
          //     data: {
          //       to: 'cdrforengineernext@gmail.com',
          //       from: 'binod.sharma@techxillence.com',
          //       fullname:
          //         values.textField[0].firstName +
          //         ' ' +
          //         values.textField[0].lastName,
          //       email: values.textField[0].email,
          //       message: values.textField[0].message,
          //       // phone: Number(values.phoneNum),
          //       subject: `CdrForEngineer Form + number: ${value}`,
          //     },
          //   })
          .then((response) => {
            setLoading(false);
            alert("Your message has been sent successfully");
            resetForm();
            setValue("");
            // console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setMsg("Invalid Phone Number");
      }
    } else {
      setMsg("Please put a valid phone number.");
    }
  };
  return (
    <Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            style={{ width: "97rem", borderRadius: "10px", Color: "white" }}
            className="bg-primary px-4 py-md-3 py-2 formContainer inputfs w-100"
          >
            {/* TextField Inputs */}
            <Form.Group
              className=" bg-primary mt-2 mt-md-0 py-xl-2 w-100 me-3"
              style={{ backgroundColor: "black" }}
            >
              {/*   <lable htmlFor="name">Name</lable> */}
              <FastField
                className="form-control bg-primary"
                placeholder="Full Name"
                type="text"
                id="name"
                name="textField[0].fullName"
              />
              <ErrorMessage
                name="textField[0].fullName"
                component={TextError}
              />
            </Form.Group>

            <Form.Group className="mt-2 mt-md-0 py-xl-2 w-100 me-3">
              <FastField
                className="form-control "
                placeholder="Email"
                type="email"
                id="email"
                name="textField[0].email"
              />
              <ErrorMessage name="textField[0].email" component={TextError} />
            </Form.Group>
            <Form.Group className="mt-2 my-md-2  py-xl-2 w-100 form-control">
              <PhoneInput
                placeholder="Contact Number"
                value={value}
                onChange={setValue}
                defaultCountry="AU"
                // error={
                //   value   ? isValidPhoneNumber(value)    ? undefined    : 'Invalid phone number'    : 'Phone number required'
                // }
              />

              {value ? (
                <p>
                  {value && isValidPhoneNumber(value)
                    ? setDisabled(false)
                    : setDisabled(true)}
                </p>
              ) : null}
            </Form.Group>
            <p className="text-danger text-start">{msg}</p>

            <Form.Group className="mt-0 mt-md-0 py-2">
              <FastField
                rows={5}
                className="form-control "
                placeholder="Your Message"
                as="textarea"
                id="message"
                name="textField[0].message"
              />
              <ErrorMessage name="textField[0].message" component={TextError} />
            </Form.Group>
            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <Button
                className=" btn-primary text-white fw-bold w-100 my-3 rounded-pill"
                type="submit"
                disabled={loading}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Row>
  );
};

export default Form2;
