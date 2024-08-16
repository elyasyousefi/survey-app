import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { useCallback, useState } from "react";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "شرایط و قوانین را تایید کنید"),
  });

  const registerData = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const savedUser = localStorage.getItem("user");
    const ParsedsavedUser = savedUser
      ? JSON.parse(savedUser)
      : { profileData: {}, answers: { test: "", descriptive: "", blank: "" } };

    const profileData = {
      id: crypto.randomUUID(),
      firstname: formData.get("firstName"),
      lastname: formData.get("lastName"),
      email: formData.get("email"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
    };

    if (ParsedsavedUser.profileData.email === profileData.email) {
      console.log(ParsedsavedUser, "&&", profileData.email);
      setErrorMessage("قبلا فردی با این ایمیل در نظرسنجی شرکت کرده است");
      setConfirmMessage("");
      return console.error("قبلا فردی با این ایمیل در نظرسنجی شرکت کرده است");
    }
    setErrorMessage("");
    setConfirmMessage(
      "اطلاعات اولیه شما با موفقیت ثبت شد، شما می توانید در نظرسنجی شرکت کنید"
    );

    console.log("profileData:", profileData.id);
    localStorage.setItem(
      "user",
      JSON.stringify({
        profileData: profileData,
        answers: { test: "", descriptive: "", blank: "" },
      })
    );
  }, []);

  // const startSurvey = () => {
  //   const savedProfile = localStorage.getItem("profileData");
  //   const ParsedSavedProfile = JSON.parse(savedProfile);
  //   console.log("ParsedSavedProfile:", ParsedSavedProfile.id);
  //   return ParsedSavedProfile.email;
  // };
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          state: "",
          zip: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate dir="rtl" onSubmit={registerData}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>نام</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback> Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback> Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>ایمیل</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>شهر</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام شهر"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>استان</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="استان"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>کد پستی</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="کد پستی"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <span>محدودیت زمانی شما برای پاسخگویی 2 دقیقه می باشد </span>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="پذیرش شرایط و قوانین نظرسنجی "
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            {!confirmMessage && <Button type="submit">ثبت نام </Button>}
          </Form>
        )}
      </Formik>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      {confirmMessage && (
        <>
          <div className="alert alert-success" role="alert">
            {confirmMessage}
          </div>
          <Button href="/survey" type="submit">
            شروع پاسخگویی به سوالات نظرسنجی{" "}
          </Button>
        </>
      )}
    </>
  );
}

export default Register;
