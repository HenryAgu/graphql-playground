import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="flex flex-col mt-[10vh] h-screen items-center">
      <h1 className="text-4xl font-bold">GraphQL React App</h1>
        <UserList />

    </div>
  );
};

export default App;
