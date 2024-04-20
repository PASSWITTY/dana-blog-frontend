import Post from "./post";
import get from "./get";
import deleteRequest from "./delete";

const SpacesApi = {
    auth: {
        login: (data) => Post('/users/login', data),
        register: (data) => Post('/author/signup/', data),
        // passwordUpdate: (data) => Post('/author/signup/', data),
      },
      users: {
        allusers: get('/allusers'),
        userCount: get('/usercount'),
        adminOnly: get('/adminsonly'),
        deleteUser: (id) => deleteRequest(`/deleteuser/${id}`),
      },

      blogs: {
        allblogs:get('/allblogs'),
        blogsCount:get('/blogcount'),
        populartopics:get('/popular'),
        getBlogById:(id) => get(`/getblog/${id}`),
        deleteBlog: (id) => deleteRequest(`/deleteblog/${id}`),
        getBlogByUID: (id) => get(`/getbloguid/${id}`),
        getBlogCount: (id) => get(`/getblogcount/${id}`),
        addBlog: (data) => Post('/createblog/', data),
        updateBlog: (data) => Post('/updateblogs/', data),
      },

      subscribe: {
        sub: (data) => Post('/subscribe', data),
      }
      
}

export default SpacesApi;