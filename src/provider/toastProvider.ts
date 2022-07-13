import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function toastWarn(message: string) {
    toast.warn(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}
