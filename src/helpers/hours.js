import { api } from './api';

export const getAvailableHours = async () => {
    try {
        const availableHours = await api.get( '/hours' );
        return availableHours;
    } catch (error) {
        return [];
    }
}

export const getHourById = async (id) => {
    try {
        const availableHours  = await api.get( '/hours/' + id, );
        return availableHours;
    } catch (error) {
        return [];
    }
}

export const scheduleHourApi = async (obj) => {
    try {
        const resp = await api.put( '/hours/schedule', obj);
        return resp
    } catch (error) {
        return [];
    }
}

export const studentHoursHistorial = async (obj) => {
    try {
        const resp = await api.post( '/hours/student-hours', obj);
        return resp
    } catch (error) {
        return [];
    }
}

export const getAllHours = async () => {
    try {
        const resp = await api.get( '/hours/admin');
        console.log(resp);
        return resp
    } catch (error) {
        return [];
    }
}