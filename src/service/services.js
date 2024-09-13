import baseService from './baseService';

export function signupAPI(payload) {
    return baseService.post('/auth/signup', payload);
}

export function loginAPI(payload) {
    return baseService.post('/auth/login',payload);
};