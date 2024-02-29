<template>
    <v-dialog max-width="500px">
        <v-form @submit.prevent="submit">
            <v-card>
                <v-card-title
                    style="font-weight: bold;position:fixed;width: 100%;top: 0;background-color: white;z-index: 100;">
                    <h4>{{ id ? "Sửa user" : "Thêm user" }}</h4>
                </v-card-title>
                <v-container class="mt-10" style="background-color: rgb(247, 247, 247);">
                    <v-row>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Tên người dùng</span> <span class="text-blue ml-2">*</span>
                            <v-text-field v-model="name" placeholder="Nhập tên người dùng" style="background-color: white;"
                                density="compact" single-line hide-details variant="outlined"></v-text-field>
                            <span style="color:red">{{ nameError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Email</span><span class="text-blue ml-2">*</span>
                            <v-text-field v-model="email" placeholder="Nhập email người dùng"
                                style="background-color: white;" density="compact" single-line hide-details
                                variant="outlined"></v-text-field>
                            <span style="color:red">{{ emailError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Ngày sinh</span><span class="text-blue ml-2">*</span>
                            <v-text-field v-model="birthday" type="date" style="background-color: white;" density="compact"
                                single-line hide-details variant="outlined"></v-text-field>
                            <span style="color:red">{{ birthdayError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Số điện thoại</span><span class="text-blue ml-2">*</span>
                            <v-text-field v-model="phone" placeholder="Nhập số điện thoại người dùng"
                                style="background-color: white;" density="compact" single-line hide-details
                                variant="outlined"></v-text-field>
                            <span style="color:red">{{ phoneError }}</span>

                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Quyền</span><span class="text-blue ml-2">*</span>
                            <v-radio-group v-model="role" style="font-size: 13px;" class="mt-2" inline single-line
                                hide-details>
                                <v-radio color="primary" density="compact" :label="Role.ADMIN"
                                    :value="Role.ADMIN"></v-radio>
                                <v-radio color="primary" density="compact" :label="Role.USER" :value="Role.USER"></v-radio>
                            </v-radio-group>
                            <span style="color:red">{{ roleError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Avatar</span><span class="text-blue ml-2">*</span><br>
                            <input @change="handleImageChange" type="file" class="custom-file-input" />
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions class="pr-4">
                    <v-spacer></v-spacer>
                    <v-btn @click="close()" class="text-capitalize" text="Hủy"></v-btn>
                    <v-btn type="submit" color="#0F60FF" class="text-capitalize" variant="elevated">{{
                        idEdit ? "Update" : "Thêm" }}<span class="text-lowercase">{{ idEdit ? "" : "mới" }}</span></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref, watch } from 'vue';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import { useLoadingStore } from '@/store/loading';
import { Role } from '@/common/contant/contants';
import { userServiceApi } from '@/service/user.api';
const loading = useLoadingStore()


const props = defineProps(['idEdit'])
const emit = defineEmits(['close', 'loadData'])
let id = props.idEdit
watch(() => props.idEdit, (newValue, oldValue) => {
    resetForm()
    id = newValue
    if (props.idEdit !== null) {
        getUserById(id)
    }
});

const { handleSubmit, resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField(
    'name',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(
            /^[a-zA-ZÀ-Ỹà-ỹ ]*$/,
            'Tên không hợp lệ. Tên chỉ được chứa chữ cái và khoảng trắng.'
        )
);

const { value: email, errorMessage: emailError } = useField(
    'email',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Email không hợp lệ'
        )
); const { value: birthday, errorMessage: birthdayError } = useField(
    'birthday',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(
            /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            'Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD.'
        )
);

const { value: phone, errorMessage: phoneError } = useField(
    'phone',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(
            /^[0-9]{10}$/,
            'Số điện thoại không hợp lệ. Số điện thoại phải có 10 chữ số.'
        )
);
const { value: role, errorMessage: roleError } = useField(
    'role',
    yup
        .string()
        .required('Không được bỏ trống')
);


const submit = handleSubmit(async () => {
    loading.setLoading(true)
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('birthday', birthday.value);
    formData.append('phone', phone.value);
    formData.append('file', imageFile.value);
    formData.append('role', role.value);
    formData.append('password', "1234567Aa@")

    if (id == null) {
        const data = await userServiceApi.createUser(formData);
        if (!data.success) {
            close()
            loading.setLoading(false)
            showWarningsNotification(data.message)
            empty()
        }
        else {
            close()
            emit('loadData')
            loading.setLoading(false)
            showSuccessNotification("Thêm thành công")
            empty()
        }
    }
    else {
        const data = await userServiceApi.updateUser(id, formData);
        if (!data.success) {
            close()
            loading.setLoading(false)
            showWarningsNotification(data.message)
            empty()
        }
        else {
            close()
            emit('loadData')
            loading.setLoading(false)
            showSuccessNotification("cập nhật thành công")
            empty()
        }
    }
});

const getUserById = async (id) => {
    try {
        const data = await userServiceApi._getDetail(id);
            name.value = data.data.name;
            email.value = data.data.email;
            birthday.value = data.data.birthday;
            phone.value = data.data.phone;
            role.value = data.data.role;
    } catch (error) {
        console.error('Error fetching user detail:', error);
    }
}
const empty = () => {
    imageFile.value = null;
    id = null;
    props.idEdit = null
}

const imageFile = ref(null);
const handleImageChange = (event) => {
    const file = event.target.files[0];
    imageFile.value = file;
    
};
const close = () => {
    emit('close')
    resetForm()
}
</script>