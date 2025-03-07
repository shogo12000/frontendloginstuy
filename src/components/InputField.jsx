export const InputField = ({ title, type, value, onChange}) => {
  return (
    <>
      <label
        htmlFor={title}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
      <div className="mt-2">
        <input
          id={title}
          name={title}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete="given-name"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </>
  );
};
