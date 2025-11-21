import type { FormEvent } from "react"
import styles from "./Auth.module.scss"
import { useAuthUserMutation } from "../../api/controllers/user"
import { useAppDispatch } from "../../store/hooks"
import { actions } from "../../store/user/slice"

const Auth = () => {
    const dispatch = useAppDispatch()
    const [authUser] = useAuthUserMutation()

    const handleAuth = async (event: FormEvent) => {
        console.log(event)

        const user = await authUser("se_tale@mail.ru").unwrap()
        console.log(user)
        dispatch(actions.setUser(user))
    }

    return (
        <div className={styles.auth} onSubmit={handleAuth}>
            Auth
            <form>
                <input type="email" />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Auth
