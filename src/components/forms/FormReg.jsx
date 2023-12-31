import { useForm } from "../../hooks/useForm"

export const FormReg = () => {

    const [value, handleInputChange] = useForm({
        email: "",
        password: "",
        rut: "",
        name: ""
    })

    const { email, password, rut, name } = value;

    const onSubmit = ( e ) => {
        e.preventDefault();

        console.log(email, password, rut, name );
    }

    return (
        <form className="formulary">
            <h3>Registrate</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    name="email"
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
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Nombre completo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    name="name"
                    value={name}    
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Rut</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    name="rut"
                    value={rut}    
                    onChange={handleInputChange}
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={ onSubmit }
                >Registrarse</button>
        </form>
    )
}
