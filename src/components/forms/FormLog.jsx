import { loginApi } from '../../helpers/users';
import { useForm } from '../../hooks/useForm';
import { useUserStore } from '../../store/userStore';

export const FormLog = () => {

    const userStore = useUserStore((set) => set);

    const [value, handleInputChange] = useForm({
        username: "",
        password: ""
    })

    const { username, password } = value;

    const onSubmit = ( e ) => {
        e.preventDefault();   
        
        loginApi({username, password})
            .then((user) => {
                const {accessToken, role, username} = user.data
                
                userStore.setToken(accessToken);
                userStore.setUsername(username);
                userStore.setActive(true);
                userStore.setRole(role);
            
                window.location.reload();
            })
    }

    return (
        <form className="formulary">
            <h3>Iniciar sesión</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                <input 
                    type="text"
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    name='username' 
                    value={username} 
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
