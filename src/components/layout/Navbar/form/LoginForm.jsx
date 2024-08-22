import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputField, Button } from '../../../common';
import { iconV2 } from '../../../../assets/images';
import useUser from '../../../../hooks/useUser';
import clsx from 'clsx';
import toast from 'react-hot-toast';

export const LoginForm = ({ toggleForm, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, error, status: { isLoading, isError, isSuccess }, response } = useUser();
    console.log("🚀 ~ LoginForm ~ error:",)

    const onSubmit = (data) => {
        login(data);
    };

    useEffect(() => {
        if (isSuccess) {
            toast(response.message,
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#ff',
                        color: '#333',
                    },
                }
            );
            onClose();
        }
    }, [isSuccess, onClose]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="content-center overflow-auto px-8 py-10 text-left bg-white max-h-[90vh] scrollbar-thin scrollbar-thumb-picton-blue scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
            <div className="w-full">
                <div className="flex flex-col items-center justify-center gap-2 mb-8">
                    <img src={iconV2} className="w-16" />
                    <p className="text-xl font-bold">Iniciar sesión</p>
                    <span className="text-sm max-w-[90%] text-center text-[#8B8E98]">
                        Empieza con nuestra aplicación, sólo tienes que iniciar la sesión y disfrutar de la experiencia.
                    </span>
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
                            required: "El nombre de usuario es obligatorio"
                        }}
                    />
                </div>
                <div className={clsx(
                    'mb-10',
                    { 'mb-5': isError }
                )}>
                    <InputField
                        id='password'
                        type='password'
                        text='Contraseña'
                        colorLabel='text-gray-500'
                        register={register}
                        name='password'
                        errors={errors}
                        validation={{
                            required: "La contraseña es obligatoria"
                        }}
                    />
                    {isError && (
                        <div className="mt-2 text-red-500 text-center">
                            {"Error al iniciar sesión" || error?.message || error.data.message}
                        </div>
                    )}
                </div>
                <div className="mt-5 w-full">
                    <Button type='submit' text={isLoading ? 'Iniciando...' : 'Inicia sesión'} disabled={isLoading} />
                </div>
                <div className="mt-2 text-center">
                    <p
                        onClick={toggleForm}
                        type="button"
                        className="">
                        ¿No tienes una cuenta?
                        <span onClick={toggleForm} className='text-blue-500 hover:underline ml-2 cursor-pointer'>Regístrate aquí</span>
                    </p>
                </div>
            </div>
        </form>
    );
};
