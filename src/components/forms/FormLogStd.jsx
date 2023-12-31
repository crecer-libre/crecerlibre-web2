import { loginApi, loginStudent } from '../../helpers/users';
import { useForm } from '../../hooks/useForm';
import { useUserStore } from '../../store/userStore';

export const FormLogStd = () => {

    const userStore = useUserStore((set) => set);

    const [value, handleInputChange] = useForm({
        email: "",
        password: ""
    })

    const { email, password } = value;

    const onSubmit = ( e ) => {
        e.preventDefault();   
        
        loginStudent({email, password})
            .then((user) => {
                userStore.setToken(user.success.accessToken);
                userStore.setEmail(email);
                userStore.setActive(true);
                userStore.setRole(user.success.role);
            
                window.location.reload();
            })

    }

    return (
        <form className="formulary">
            <h3>Iniciar sesión</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input 
                    type="email"
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    name='email' 
                    value={email} 
                    onChange={handleInputChange}
                />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={ onSubmit }
                >Iniciar sesión</button>
        </form>
    )
}
