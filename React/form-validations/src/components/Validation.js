import * as yup from 'yup';

const Validation = yup.object().shape({
    email: yup.string().email("Please, Enter a valid e-mail").required("E-mail is required"),
    password: yup.string().min(5, "Password must be longer than 5 charachters").required(),
    password_confirmation: yup.string().oneOf([yup.ref("password")]).required(),
});


export default Validation