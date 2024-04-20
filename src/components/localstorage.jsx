const LocalStorage = {
    getUserFromLocalStorage: () => {
        const storedUser = localStorage.getItem('user');
        return storedUser;
    }
};

export default LocalStorage;