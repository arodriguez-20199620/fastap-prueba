import { useCreateUserMutation, useLoginMutation } from "../services/userApi";
import useAsyncAction from "../utils/useAsyncAction";

const useUser = () => {
    const [createUser] = useCreateUserMutation();
    const [login] = useLoginMutation();
    const { handleAction, status, response, error } = useAsyncAction();

    const handlerCreateUser = (userData) => handleAction(createUser, userData);
    const handlerLogin = (loginData) => handleAction(login, loginData);

    return {
        createUser: handlerCreateUser,
        login: handlerLogin,
        status,
        response,
        error,
    };
};

export default useUser;