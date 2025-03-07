import { UserProfile } from "../redux/UserProfile";
import { summary } from "../assets/summary";

export const MainPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <UserProfile />

      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Application Summary
        </h1>
        {summary.map((section, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {section.title}
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              {section.content.map((item, i) => (
                <li key={i} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
