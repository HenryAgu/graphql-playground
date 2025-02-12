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
      <h1>Country List</h1>
      <ul className="user-list">
        {countryNames.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
