import {Admin, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {authProvider} from "./providers/authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="users" list={ListGuesser} />
</Admin>;

export default App;