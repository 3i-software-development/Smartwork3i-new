import axios from 'axios';
import qs from 'qs';
import { useMutation, useQuery } from 'react-query';


//Lấy menu homepage
export const GetMainMenu = () => {
    return useQuery(['getmainmenu'], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/HomePage/GetMainMenu`);
        return response.data;
    });
};

//lấy 1 bài viết;
export const GetAPost = (id) => {
    return useQuery(['getapost',id], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/HomePage/GetItem?id=${id}`);
        return response.data;
    });
};

//listdowload
export const GetListdowload = (id) => {
    return useQuery(['getlistdowload',id], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/Admin/CmsItemFile/Download?id=${id}`);
        return response.data;
    });
};

//getcontent
export const GetContent = (id) => {
    return useQuery(['getcontent',id], async () => {
        const response = await axios.get(`https://backend.smartwork.3i.com.vn/Admin/CmsItemFile/GetContentCms?id=${id}`);
        return response.data;
    });
};

//get list content
export const GetListContent = (id) => {
    return useQuery(['getlistcontent',id], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/Admin/CmsItemFile/GetListCMS?cmsCatId=${id}`);
        return response.data;
    });
};

//get item module
export const GetItemModule = () => {
    return useQuery(['getitemmodule'], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/Admin/CommonSetting/GetItemModule`);
        return response.data;
    });
};

//list product 
export const GetListProduct = () => {
    return useQuery(['getlistproduct'], async () => {
        const response = await axios.post(`https://backend.smartwork.3i.com.vn/MobileLogin/GetTreeCategoryData`);
        return response.data;
    });
};