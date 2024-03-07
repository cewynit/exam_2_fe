import { HttpStatus, PageName } from '@/common/contant/contants';
import localStorageAuthService from '@/common/storages/authStorage';
import axios from 'axios';
import { showWarningsNotification } from '@/common/helper/helpers';
import router from '@/router';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.removeAll();
  showWarningsNotification("Hết phiên đăng nhập. Vui lòng đăng nhập lại")
  const currentPage = router.currentRoute;
  if (redirectToLogin && currentPage.value.name !== PageName.LOGIN_PAGE) {
    sessionStorage.setItem('redirect', currentPage.value.fullPath);
    router
      .push({ name: PageName.LOGIN_PAGE })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = process.env.VUE_APP_API_URL;
    const formData=new FormData()
    formData.append("refresh_token",localStorageAuthService.getRefreshToken())
    response = await axios.post(
      `${API_URL}auth/refresh`,
      formData,
      { 
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/json' 
        }
      }
    );
    console.log(response.data?.data);
    
    if (response?.status === HttpStatus.CREATA_AT) {
      localStorageAuthService.setAccessToken(response.data?.data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.expiresIn);
      
      localStorageAuthService.setRefreshToken(response.data?.data.refreshToken);
      localStorageAuthService.setRefresh_TokenExpiredAt(response.data?.data.refresh_expiresIn);
      
      localStorageAuthService.setUserRole(response.data?.data.profile?.role || "");
      return;
    }
    // logout(true);
    return;
  } catch (error) {
    logout(true);
    console.log(error);
    return;
  }
};
