import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

export const $api = axios.create({
    url: __API__,
    headers: {
        Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
    },
});
