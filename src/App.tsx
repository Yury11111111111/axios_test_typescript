import axios from "axios";
import React, { useEffect, useState } from "react";
import UseList from "./components/UseList";
import { IUser } from "./types/types";

function App() {
  var [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])
  
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div className="App">
      <UseList
        users={users}
      />
    </div>
  );
}

export default App;
