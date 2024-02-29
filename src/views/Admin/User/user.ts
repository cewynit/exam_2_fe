import { computed, onMounted, reactive, ref } from "vue";
import { userServiceApi } from "@/service/user.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IUser } from "./interface";
import { useLoadingStore } from "@/store/loading";
export const useUser = () => {
    const loading=useLoadingStore()
    const users = ref<IUser[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchUsers = async () => {
      try {
        loading.setLoading(true)
        const res = await userServiceApi._getList<IUser>(query);
        console.log(res);
        loading.setLoading(false)
        if(res.success)
          return {
            data:res.items,
            totalItems:res.totalItems
          }
        return null
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    const searchUsers = async () => {
      try {
        const res = await userServiceApi._getList<IUser>(query);
        if(res.success)
            return {
              data:res.items,
              totalItems:res.totalItems
            }
        return null
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  return {
    users,
    fetchUsers,
    query,
    searchUsers,
  };
};
