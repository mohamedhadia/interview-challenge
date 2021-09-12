import React from "react";

const UserTable = ({ users, loadMore }) => {
  console.log(users);
  return (
    <>
      <table
        className="table  is-striped is-hoverable is-fullwidth
"
      >
        <thead>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.login.username}>
                <th>{`${user.name.first} ${user.name.last}`}</th>
                <td>
                  <span
                    className={` ${
                      user.gender == "male"
                        ? "tag is-info is-light"
                        : "tag is-danger is-light"
                    } `}
                  >
                    {user.gender}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>{user.location.city}</td>
                <td>
                  <a href="#">Edit</a>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot className="has-background-white-bis	">
          <tr>
            <td colspan="5" className="mx-auto  is-full  row ">
              <a onClick={loadMore} className="mx-auto is-full">
                load more
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default UserTable;
