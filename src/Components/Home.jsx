
import useAuthorization from "../hooks/useAutheraztion";

export default function Home() {
  const storageKey = "loginToken";
  const storedToken = localStorage.getItem(storageKey);
  const userData = storedToken ? JSON.parse(storedToken) : null;

  const { isLoading, data, error } =useAuthorization ({
    queryKey: ["todos"],
    url: "todoos",
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    }
  })
    // queryKey: ["todos"],
    // queryFn: async () => {
    //   const res = await instance.get("todoos", {
    //     headers: {
    //       Authorization: `Bearer ${userData.jwt}`,
    //     },
    //   });
    //   return res.data;
    

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Todos List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((todo) => (
              <tr
                key={todo.id}
                className="hover:bg-gray-200 transition"
              >
                <td className="py-2 px-4">{todo.id}</td>
                <td className="py-2 px-4">{todo.title}</td>
                <td className="py-2 px-4">{todo.description}</td>
                <td className="py-2 px-4 flex justify-center gap-2">
                  <button className="bg-blue-400 hover:bg-blue-700 transition-all text-white px-5 py-1 rounded-lg text-sm shadow">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {data?.data?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No todos found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
