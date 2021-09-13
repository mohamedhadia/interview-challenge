import { useEffect, useState } from "react";
import { BackToHome } from "../App";
import GenderBar from "./components/GenderBar";
import AgeBar from "./components/AgeBar";
import CountryBar from "./components/CountryBar";
import RegisteredBar from "./components/RegisteredBar";

let pageN = 8;
const apiUrl = `https://randomuser.me/api/?seed=dexi-interview?page=${pageN}&results=100`;

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/
const ChallengeThree = () => {
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

  useEffect(() => {
    fetchUsers();
  }, []);

  /*
// first approach

  let male = "male";
  const malesCount = users.filter((obj) => obj.gender === male).length;
  let female = "female";
  const femalesCount = users.filter((obj) => obj.gender === female).length;
 */

  let obj = {
    gender: {},
    age: {},
    country: {},
    registration_date: {},
  };

  for (const user of users) {
    let value = user.gender;
    obj["gender"][value] =
      obj["gender"][value] !== undefined ? obj["gender"][value] + 1 : 1;
  }
  for (const user of users) {
    let value = user.dob.age;
    obj["age"][value] =
      obj["age"][value] !== undefined ? obj["age"][value] + 1 : 1;
  }

  for (const user of users) {
    let value = user.location.country;
    obj["country"][value] =
      obj["country"][value] !== undefined ? obj["country"][value] + 1 : 1;
  }

  for (const user of users) {
    let value = new Date(user.registered.date).getFullYear();
    //console.log(value);
    obj["registration_date"][value] =
      obj["registration_date"][value] !== undefined
        ? obj["registration_date"][value] + 1
        : 1;
  }

  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-white">Challenge 3</h1>
      <h2 className="subtitle has-text-grey-lighter">
        Fetch 100 users from the same api as before, and visualize their
        distribution by <code>age</code>, <code>gender</code>,
        <code>country</code>, and <code>registration date</code>.
      </h2>

      {/* Insert your data visualizations here */}
      {/* users distribution by gender bar chart */}

      {loading && <h3>Loading</h3>}
      <div className="mb-6 pb-6">
        <GenderBar data={[...Object.values(obj.gender)]} />
      </div>

      {/* users distribution by age bar chart */}
      <div className="mb-6 pb-6">
        <AgeBar
          data={[...Object.values(obj.age)]}
          labels={Object.keys(obj.age)}
        />
      </div>
      {/* users distribution by country bar chart */}
      <div className="mb-6 pb-6">
        <CountryBar
          data={[...Object.values(obj.country)]}
          labels={Object.keys(obj.country)}
        />
      </div>

      {/* users distribution by registration year bar chart */}
      <div className="mb-6 pb-6">
        <RegisteredBar
          data={[...Object.values(obj.registration_date)]}
          labels={Object.keys(obj.registration_date)}
        />
      </div>
    </>
  );
};

export default ChallengeThree;
