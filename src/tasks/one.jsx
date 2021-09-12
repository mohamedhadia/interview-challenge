import { BackToHome } from "../App";

const array1 = [
  ["name", "id", "age", "weight", "job"],
  ["Mohammed", "3", "20", "120", "developer"],
  ["John", "1", "21", "150", "designer"],
  ["Ali", "2", "23", "90", "doctor"],
  ["Mariam", "4", "20", "100", "lawyer"]
];

const array2 = [
  ["name", "id", "height"],
  ["Ali", "2", "50"],
  ["John", "1", "45"],
  ["Mariam", "4", "43"],
  ["Mohammed", "3", "48"],
  ["Tony", "5", "96"]
];

const array3 = [
  ["name", "id", "parent"],
  ["Ali", "2", "yes"],
  ["John", "1", "yes"],
  ["Tony", "5", "yes"]
];

const array4 = [
  ["name", "id", "hobby"],
  ["Mariam", "4", "video games"],
  ["Ali", "2", "kickboxing"],
  ["Tony", "5", "football"]
];

const array5 = [
  ["id", "status"],
  ["1", "active"],
  ["2", "inactive"],
  ["3", "active"],
  ["4", "active"],
  ["5", "active"]
];

/* 
  Combine the arrays into one table. 
  You may find console.table()
  useful for monitoring your progress
  You may not install any external libraries.
*/

const ChallengeOne = () => {
  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-white">Challenge 1</h1>
      <h2 className="subtitle has-text-grey-lighter">
        Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
        them into one array.
      </h2>
      <h2 className="subtitle has-text-grey-lighter">
        You may not install any additional libraries.
      </h2>
    </>
  );
};

export default ChallengeOne;
