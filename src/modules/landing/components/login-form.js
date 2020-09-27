import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './login-form.scss';
import { setMessage } from '../../../helper/utils';
import Actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { Button } from '../../../shared/form';
import usePasswordToggle from '../../../shared/form/usePasswordToggle';
import PropTypes from 'prop-types';
import LocalStorageService from '../../../helper/localStorageService';

// set validation
const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email(setMessage('Email is not valid', 'email'))
        .required(setMessage('Email field is required', 'email')),
        password: Yup.string()
        .required('No password provided.') 
        //.min(8, 'Password is too short - should be 8 chars minimum.')
        //.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must have atleast 1 small, 1 upper, 1 digit and 1 special character')
});

export default function LoginForm(props) {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const { addToast } = useToasts();
    const localStorageService = LocalStorageService.getService();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const history = useHistory();
    const submit = (params) => {
        setLoading(true);
        dispatch(Actions.authAction.Login(params))
            .then((response) => {
                setLoading(false);
                if (response.success === true) {
                    localStorageService.setLoginInfo({
                        token: response.token,
                    });
                    history.push('/dashboard');
                } else {
                    addToast(response.message, { appearance: 'error', autoDismiss: true });
                }
            })
            .catch((error) => { 
                addToast(error.message, { appearance: 'error', autoDismiss: true });
            });
    };

    return (
        <div className="w-75 pl-5 mx-auto login-form">
            <div className="text-center ">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={(values) => {
                        submit(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="">
                            <div className="form-group">
                                <Field
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className={
                                        errors.email && touched.email
                                            ? 'form-control is-invalid'
                                            : 'form-control'
                                    }
                                />
                                <div className="mb-2 form-error">
                                    {errors && errors.email && touched && touched.email
                                        ? errors.email
                                        : ''}
                                </div>
                            </div>

                            <div
                                className={
                                    errors.password && touched.password
                                        ? 'form-group position-relative is-invalid'
                                        : 'form-group position-relative'
                                }
                            >
                                <Field
                                    name="password"
                                    type={PasswordInputType}
                                    placeholder="Password"
                                    className={
                                        errors.password && touched.password ? 'form-control is-invalid' : 'form-control'
                                    }
                                />
                                <span className="password-toogle-icon">{ToggleIcon}</span>
                                <div className="mb-2 form-error">
                                    {errors && errors.password && touched && touched.password ? errors.password : ''}
                                </div>
                            </div>
                            <div className="form-group pt-2">
                                <Button
                                    title={'Login'}
                                    btnType={'submit'}
                                    btnClassname={'btn w-100'}
                                    loading={loading}
                                    btnDisabled={loading ? 'disabled' : ''}
                                />
                                
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    changeForm: PropTypes.func.isRequired,
};
