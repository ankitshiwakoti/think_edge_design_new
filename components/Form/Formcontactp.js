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

const Formcontactp = () => {
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
    <Row className="formcontactp p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            style={{
              width: "97rem",
              borderRadius: "10px",

              backgroundColor: "transparent",
            }}
            className=" pe-0 px-4 py-md-3 py-2 formContainer text-secondary inputfs w-100"
          >
            {/* TextField Inputs */}
            <div className="d-grid ">
              <Form.Group
                className="  mt-2 pb-0 mt-md-0 py-xl-2 w-100 me-3 text-secondary"
                style={{ backgroundColor: "transparent" }}
              >
                <lable htmlFor="name">Name</lable>
                <FastField
                  className="rounded-0 form-control text-secondary  bordertry"
                  placeholder="Steven Jackson*"
                  type="text"
                  id="name"
                  name="textField[0].fullName"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
                <ErrorMessage
                  name="textField[0].fullName"
                  component={TextError}
                />
              </Form.Group>
              <div className=" mt-2 pb-0 mt-md-0 pt-2 text-secondary">
                <lable
                  className="text-secondary"
                  style={{
                    backgroundColor: "transparent",
                  }}
                  htmlFor="name"
                >
                  Phone no.
                </lable>
                <Form.Group
                  className=" rounded-0  bordertry text-secondary  w-100 form-control"
                  style={{ backgroundColor: "transparent" }}
                >
                  <PhoneInput
                    className="text-secondary"
                    placeholder="Phone *"
                    value={value}
                    onChange={setValue}
                    defaultCountry="AU"
                    style={{
                      backgroundColor: "transparent",
                    }}
                    // style={{ backgroundColor: "black", color: "black" }}
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
              </div>
            </div>
            <Form.Group
              className="mt-2 mt-md-0 py-xl-2 w-100 me-3 text-secondary"
              style={{ backgroundColor: "transparent" }}
            >
              <lable htmlFor="name">Email Address</lable>
              <FastField
                className=" imputborder text-secondary bordertry rounded-0 form-control   "
                placeholder="ankit.shiwakoti.com.np"
                type="email"
                id="email"
                name="textField[0].email"
                style={{
                  backgroundColor: "transparent",
                }}
              />
              <ErrorMessage name="textField[0].email" component={TextError} />
            </Form.Group>
            <Form.Group
              className="mt-0 mt-md-0 py-2 text-secondary"
              style={{ backgroundColor: "transparent" }}
            >
              <lable htmlFor="name">Message</lable>
              <FastField
                rows={5}
                className=" rounded-0 form-control text-secondary bordertry "
                placeholder="Message*"
                as="textarea"
                id="message"
                name="textField[0].message"
                style={{ backgroundColor: "transparent" }}
              />
              <ErrorMessage name="textField[0].message" component={TextError} />
            </Form.Group>
            {/* Submit Button */}
            <div className="d-flex justify-content-start mt-4 ">
              <div
                className=" projectbutton btn rounded-0 bordertry "
                type="submit"
                disabled={loading}
                style={{
                  cursor: "pointer",
                  color: "#FFFEFE",
                  backgroundColor: "#A18565",
                  borderColor: "#FFFEFE",
                }}
              >
                <span className="p-2 "> Submit </span>

                <span className="p-2 ">
                  <i class="bi bi-arrow-right"></i>
                </span>
              </div>
              {/* <Button
                className=" text-start btn-primary text-white fw-bold  my-3 rounded-0"
                type="submit"
                disabled={loading}
                style={{ color: "#ababab", backgroundColor: "#343131" }}
              >
                Submit
              </Button> */}
            </div>
          </Form>
        )}
      </Formik>
    </Row>
  );
};

export default Formcontactp;
