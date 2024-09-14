'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async data => {
    data.dni = parseInt(data.dni);
    try {
      const response = await axios.post(
        'https://digitalmoney.digitalhouse.com/api/users',
        data
      );
      console.log(response.data);
      router.push('/signup/success');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 bg-black h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-white font-semibold text-2xl">Crear cuenta</h1>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="text"
        placeholder="Nombre*"
        {...register('name', { required: 'Este campo es requerido' })}
      />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="text"
        placeholder="Apellido*"
        {...register('lastname', { required: 'Este campo es requerido' })}
      />
      <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="number"
        placeholder="DNI*"
        {...register('dni', { required: 'Este campo es requerido' })}
      />
      <p className="text-red-500 text-sm">{errors.dni?.message}</p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="email"
        placeholder="Correo electrónico*"
        {...register('email', {
          required: 'Este campo es requerido',
          pattern: {
            value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: 'Ingresa un email valido',
          },
        })}
      />

      <p className="text-red-500 text-sm">{errors.email?.message}</p>
      <p className="text-white w-[300px] text-[11px]">
        Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter
        especial, una mayúscula y un número.
      </p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="password"
        placeholder="Contraseña"
        {...register(
          'password',
          { required: 'Este campo es requerido' },
          { minLength: 6, maxLength: 20 },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/,
            message:
              'Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número.',
          }
        )}
      />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="password"
        placeholder="Confirmar contraseña"
        {...register('confirmPassword', {
          required: 'Este campo es requerido',
          validate: value =>
            value === getValues('password') || 'Las contraseñas no coinciden',
        })}
      />
      <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="tel"
        placeholder="Teléfono*"
        {...register('phone', { required: 'Este campo es requerido' })}
      />

      <button
        className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center"
        type="submit"
      >
        Ingresar
      </button>
    </form>
  );
}
