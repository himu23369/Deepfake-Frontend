export function InputBox({ label, type = "text", placeholder, onChange }) {
  return (
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
              {label}
          </label>
          <div className="relative">
              <input
                  type={type}
                  placeholder={placeholder}
                  onChange={onChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              />
          </div>
      </div>
  );
}
