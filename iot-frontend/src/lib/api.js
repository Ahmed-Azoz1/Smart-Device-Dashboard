import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3000';

// إنشاء نسخة من axios
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// تسجيل الدخول وتخزين التوكن
export const loginUser = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        const { token } = response.data;

        // حفظ التوكن في الكوكيز مع تحديد الخصائص المناسبة
        Cookies.set('token', token, { 
            expires: 1, // يوم واحد
            secure: false,  // true إذا كان لديك HTTPS
            sameSite: 'Strict', // لضمان إرسال الكوكيز فقط مع الطلبات من نفس المصدر
        });

        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

// جلب التوكن من الكوكيز
const getToken = () => {
    const token = Cookies.get('token');
    if (!token) {
        throw new Error('No token found');
    }
    return token;
};

// جلب كل الأجهزة
export const getDevices = async () => {
    try {
        const token = getToken();  // تأكد من أن دالة getToken تعيد التوكن بشكل صحيح
        if (!token) {
            throw new Error('No token provided');
        }
        const response = await api.get('/devices', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching devices:', error.message);
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

// جلب تفاصيل جهاز باستخدام الـ ID
export const getDeviceDetails = async (id) => {
    try {
        const token = getToken();  // استرجاع التوكن بشكل مباشر
        const response = await api.get(`/device/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized - Token expired or invalid');
        }
        console.error('Error fetching device details:', error.response ? error.response.data.message : error.message);
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

// تسجيل الخروج (حذف التوكن)
export const logout = () => {
    Cookies.remove('token');  // حذف التوكن عند تسجيل الخروج
};
