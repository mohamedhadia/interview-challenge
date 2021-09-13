import { useEffect, useState } from "react";
import { BackToHome } from "../App";
import UserTable from "./UserTable";

let pageN = 1;
const apiUrl = `https://randomuser.me/api/?seed=dexi-interview?page=${pageN}&results=5`;

/*
  hint: the API takes page and results as query string
  eg: `?page=3&results=10`
*/

const ChallengeTwo = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      setLoading(false);
      setUsers(users.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadMore = async () => {
    let pageN = +1;
    const response = await fetch(apiUrl);
    const users2 = await response.json();
    // console.log(users2);
    setUsers(users.concat(users2.results));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-white">Challenge 2</h1>

      <h2 className="subtitle has-text-grey-lighter">
        Fetch 5 users from the api
        <code>https://randomuser.me/api/?seed=dexi-interview</code> and display
        them in a table.
      </h2>

      <h2 className="subtitle has-text-grey-lighter">
        A <code>table-example.png</code> has been provided for guidance on
        styling.
      </h2>
      <h2 className="subtitle has-text-grey-lighter">
        Pay close attention to empty and loading states
      </h2>
      <h2 className="subtitle has-text-grey-lighter">
        The table should also have a <code>Load More</code> button that fetches
        the next page of the API and appends the results to the existing users.
      </h2>

      {/* Insert your table code here */}

      {loading && <p>Loading....</p>}
      <UserTable users={users} loadMore={loadMore} />
    </>
  );
};

export default ChallengeTwo;
