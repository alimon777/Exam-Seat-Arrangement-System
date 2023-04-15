import React from "react";

export default function Input({ input_id, title, value, setValue, type, placeholder }) {
    return (
        <div className="flex flex-col mb-2 md:mr-4">
            <label htmlFor={input_id} className="text-gray-700 font-bold mb-2 pl-2 font-OB"><span className="whitespace-nowrap">{title}</span></label>
            <input id={input_id} type={type} value={value} onChange={(e) => setValue(e.target.value)} className="h-10 px-3 py-2 rounded-[20px] shadow-sm border-gray-300 focus:outline-green-login" placeholder={placeholder} required />
        </div>
    );
}
