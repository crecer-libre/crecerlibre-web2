import { api } from "./api"

export const loginApi = async (obj) => {
    const user = await api.post('/auth/login', obj);
    return user;
}

export const loginStudent = async (obj) => {
    try {
        const studentResp = await api.post('/students/login', obj);
        const { id, role, accessToken } = studentResp.data;

        const student =  {
            id,
            role,
            accessToken
        }

        const error = {
            msg: ""
        }

        const resp = {
            success: student,
            error
        };

        return resp;

    } catch (err) {
        const student = {}
        const error = {
            msg: "Error al iniciar sesión"
        }

        const resp = {
            success: student,
            error
        };
        return resp;
    }
}