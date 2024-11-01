
import clsx from "clsx";

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({ label, id, type, register, required, errors, disabled }) => {
    if(errors[id]){
        console.log(`this is input error: ${id}`,errors[id]);
    }
    return (
    
        <div className=" ">

        <label htmlFor={id}
            className="block text-sm font-semibold leading-6 text-gray-900 "
        >
            {label}
        </label>

        <div className="">
            <input type={type} id={id} disabled={disabled}  {...register(id, { required: required })} className={clsx(`
                
                form-input 
                block  
                w-full
                rounded-md
                border-0
                py-1.5
                text-gray-900
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-inset
                focus:ring-sky-600
                sm:text-sm
                sm:leading-6
                pl-2
               

                ` , errors[id] && "focus:ring-rose-500", disabled && "opacity-50 cursor-default")} />
        </div>
    </div>);
}

export default Input;