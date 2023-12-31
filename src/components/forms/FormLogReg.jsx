import { useState } from 'react';
import { FormReg } from './FormReg';
import { FormLogStd } from './FormLogStd';
import { useUserStore } from '../../store/userStore';

export const FormLogReg = () => {
    const [loginRegister, setLoginRegister] = useState('');
    const state = useUserStore((state) => state);

    return (
        <>
            {state.active ? (
                ''
            ) : (
                <div className="col-sm col-sm-6 mb-2">
                    <p className="d-inline-block w-100 gap-1">
                        <button
                            className="btn btn-primary w-100"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            onClick={() => {
                                setLoginRegister('login');
                            }}
                        >
                            Iniciar sesión
                        </button>
                        &nbsp;
                        <button
                            className="btn btn-primary w-100"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            onClick={() => {
                                setLoginRegister('formulary');
                            }}
                        >
                            Registrarse
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        {loginRegister === 'login' && <FormLogStd />}
                        {loginRegister === 'formulary' && <FormReg />}
                    </div>
                </div>
            )}
        </>
    );
};
