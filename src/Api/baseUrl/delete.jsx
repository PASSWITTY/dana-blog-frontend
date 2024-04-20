import instance from "../axios";

const deleteRequest = (url,body, params) => instance.get(url,body, { ...params });
export default deleteRequest;