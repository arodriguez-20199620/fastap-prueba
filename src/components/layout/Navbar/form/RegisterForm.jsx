import { useForm } from 'react-hook-form';
import { InputField, Button } from '../../../common';
import useUser from '../../../../hooks/useUser';

export const RegisterForm = ({ toggleForm }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, error, status: { isLoading, isError, isSuccess }, } = useUser();

    const onSubmit = (data) => {
        createUser(data).then(() => {
            if (!isSuccess) {
                setTimeout(() => {
                    toggleForm();
                }, 2000);
            }
        });
    };

    const password = watch('password');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="content-center overflow-y-auto px-8 py-10 text-left bg-white max-h-[80vh] scrollbar-thin scrollbar-thumb-picton-blue scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
            <div className="w-full">
                <div className="mb-5">
                    <p className="text-xl font-bold text-center">Regístrate</p>
                </div>
                <div className="mb-5">
                    <InputField
                        id='username'
                        type='text'
                        text='Nombre de usuario'
                        colorLabel='text-gray-500'
                        register={register}
                        name='username'
                        errors={errors}
                        validation={{
                            required: "El nombre de usuario es obligatorio",
                            minLength: {
                                value: 3,
                                message: "El nombre de usuario debe tener al menos 3 caracteres"
                            }
                        }}
                    />
                </div>
                <div className="mb-5">
                    <InputField
                        id='name'
                        type='text'
                        text='Nombre completo'
                        colorLabel='text-gray-500'
                        register={register}
                        name='name'
                        errors={errors}
                        validation={{
                            required: "El nombre completo es obligatorio"
                        }}
                    />
                </div>
                <div className="mb-5">
                    <InputField
                        id='email'
                        type='email'
                        text='Correo electrónico'
                        colorLabel='text-gray-500'
                        register={register}
                        name='email'
                        errors={errors}
                        validation={{
                            required: "El correo electrónico es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "El formato del correo electrónico no es válido"
                            }
                        }}
                    />
                </div>
                <div className="mb-5">
                    <InputField
                        id='password'
                        type='password'
                        text='Contraseña'
                        colorLabel='text-gray-500'
                        register={register}
                        name='password'
                        errors={errors}
                        validation={{
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 6,
                                message: "La contraseña debe tener al menos 6 caracteres"
                            }
                        }}
                    />
                </div>
                <div className="mb-5">
                    <InputField
                        id='password-confirm'
                        type='password'
                        text='Confirmar contraseña'
                        colorLabel='text-gray-500'
                        register={register}
                        name='passwordConfirm'
                        errors={errors}
                        validation={{
                            required: "La confirmación de contraseña es obligatoria",
                            validate: value =>
                                value === password || "Las contraseñas no coinciden"
                        }}
                    />
                </div>
                <div className="mt-5 w-full">
                    <Button type='submit' text={isLoading ? 'Creando...' : 'Crear cuenta'} disabled={isLoading} />
                </div>
                {isError && (
                    <div className="mt-2 text-red-500 text-center">
                        {error?.message || error.data.message}
                    </div>
                )}
                {isSuccess && (
                    <div className="mt-2 text-green-500 text-center">
                        ¡Cuenta creada con éxito!
                    </div>
                )}
                <div className="mt-2 text-center">
                    <p
                        onClick={toggleForm}
                        type="button"
                        className="">
                        ¿Ya tienes una cuenta?
                        <span onClick={toggleForm} className='text-blue-500 hover:underline ml-2 cursor-pointer'>Inicia sesión aquí</span>
                    </p>
                </div>
            </div>
        </form>
    );
};
