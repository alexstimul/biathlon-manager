import styles from "./App.module.scss"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "./store/hooks"
import { selectCurrentUser } from "./store/user/selectors"
import { PATH } from "./constants"

function App() {
    const location = useLocation()
    const user = useAppSelector(selectCurrentUser)

    if (!user) {
        return <Navigate to={PATH.AUTH} replace state={{ from: location }} />
    }

    return (
        <div className={styles.app}>
            <div>Left sidebar</div>
            <div className={styles.app__content}>
                <Outlet />
            </div>
        </div>
    )
}

export default App
