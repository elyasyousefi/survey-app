import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function Register() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
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
        <Form noValidate dir="rtl" onSubmit={handleSubmit}>
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
              <Form.Control.Feedback> به نظر میاد درسته!</Form.Control.Feedback>
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

              <Form.Control.Feedback>به نظر میاد درسته!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>ایمیل</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
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
          <Button type="submit">ثبت اطلاعات و شروع نظرسنجی </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
