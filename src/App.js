import React from 'react';
import './App.css';
import { CommentForm } from "./Components/CommentForm";
import { MyCustomInput } from "./Components/MyCustomInput";
import { LoginForm } from "./Components/LoginForm";
import { ProductForm } from "./Components/ProductForm";
import { Form, FormikProps, Formik } from 'formik';
import {string} from "yup";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}
function App() {
    return(
      <div className="main">
          <div className="form">
            <CommentForm />
          </div>
          <div className="form">
            <LoginForm/>
          </div>
          <div className="form">
              <ProductForm/>
          </div>
          <div>
              <Formik
                  initialValues={{
                      email: '',
                      firstName: '',
                      lastName: '',
                  }}
                  onSubmit={(values, actions) => {

                  }}
              >
                  {(props: FormikProps<Values>) => (
                      <Form className="form">
                          <MyCustomInput name="firstName" type="text" label="First Name" />
                          <MyCustomInput name="lastName" type="text" label="Last Name" />
                          <MyCustomInput name="email" type="email" label="Email" />
                          <button type="submit">Submit</button>
                      </Form>
                  )}
              </Formik>
          </div>
      </div>
    );
}
export default App;