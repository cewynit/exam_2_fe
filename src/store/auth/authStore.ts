import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { authServiceApi } from '@/service/auth.api';
import type { IBodyLogin } from '@/views/Login/interfaces';
import { computed } from 'vue';
import dayjs from '@/plugins/dayjs';
import { logout } from '@/plugins/axios/utils';

export const AuthStore = defineStore('authStore', () => {

  async function logoutAction() {
    await authServiceApi.logout();
    logout();
  }

  async function login(body: IBodyLogin) {
    const res = await authServiceApi.login(body);
    console.log(res);
    
    console.log(res)
    if (res.success) {
      localStorageAuthService.setAccessToken(res.data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(res.data.expiresIn);

      localStorageAuthService.setRefreshToken(res.data.refreshToken);
      localStorageAuthService.setRefresh_TokenExpiredAt(res.data.refresh_expiresIn);
      
      localStorageAuthService.setUserRole(res.data.profile?.role || "");
      return true
    }
    return false;
  }

  const isAuthenticated = computed(() => {
    const token = localStorageAuthService.getAccessToken();
    const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  });
  const hasToken = computed(() => {
    return !!localStorageAuthService.getAccessToken();
  });
  return {
    login,
    logoutAction,
    hasToken,
    isAuthenticated,
  };
});
