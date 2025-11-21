import styles from "./Auth.module.scss"
import { useAuthUserMutation } from "../../api/controllers/user"
import { useAppDispatch } from "../../store/hooks"
import { actions } from "../../store/user/slice"
import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../constants"

interface AuthValues {
    email: string
}

const Auth = () => {
    const dispatch = useAppDispatch()
    const [authUser] = useAuthUserMutation()
    const navigate = useNavigate()

    const handleAuth = async (values: AuthValues) => {
        const user = await authUser(values.email).unwrap()
        dispatch(actions.setUser(user))
        navigate(PATH.BASE)
    }

    return (
        <Formik<AuthValues>
            initialValues={{ email: "" }}
            onSubmit={handleAuth}
        >
            <Form className={styles.auth}>
                <Field type="email" name="email" id="email" />
                <button type="submit">Войти</button>
            </Form>
        </Formik>
    )
}

export default Auth
