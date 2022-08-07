import { useState } from "react";

const TextInput = ({ title, placeholder, type, setValue }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="w-fit relative">
      <h2 className="text-text">{title}*</h2>
      <input
        className="w-96 h-14 rounded-lg px-4 bg-background border-textDarker border 
        text-textDarker focus:text-text"
        placeholder={placeholder}
        type={isPasswordVisible ? 'text' : type}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" && (
        <span 
        className="material-symbols-outlined text-text absolute left-[90%] top-[50%] cursor-pointer"
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
            {isPasswordVisible ? 'visibility' : 'visibility_off'}
        </span>
      )}
    </div>
  );
};

export default TextInput;
