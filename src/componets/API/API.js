import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    //Igor
    'API-KEY': '2a15240e-71ad-4b0b-a467-a808b7479bd1',
    //nomono
    //'API-KEY': '5427931a-35dd-4342-a223-b0b3e705ed5f',
  },
});

export const userAPI = {
  getUser(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfileUpdate(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  signIn(formData) {
    return instance.post(`auth/login`, formData);
  },
  signOut() {
    return instance.delete(`auth/login`);
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
