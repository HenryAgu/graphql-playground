import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries";

interface CountryNames {
  type: string;
  name: string;
}

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data?.countries[0].name);
  const countryNames: CountryNames[] = data?.countries;
  return (
    <div>
      <h1 className="mt-5 text-center text-2xl font-semibold">Country List</h1>
      <ul className="h-[400px] overflow-y-auto mt-5 flex flex-col gap-y-1.5">
        {countryNames.map((country, index) => (
          <li className="flex items-center gap-x-2.5">

              <span className="text-sm font-bold">{index + 1}.</span>
              <span className="text-sm font-normal">{country.name}</span>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
