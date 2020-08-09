import React, { useState } from "react";
import { createUseStyles } from "react-jss";

export default function SearchUser() {
  const classes = useStyles();

  const [userList, setUserList] = useState([]);
  const [timer, setTimer] = useState();

  async function search(name) {
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        try {
          let responseFetch = await fetch(
            `https://api.github.com/search/users?q=${name}`,
            { method: "GET" }
          );
          if (!responseFetch.ok) throw new Error(responseFetch.statusText);
          let responseBody = await responseFetch.json();
          if (responseBody && responseBody.items)
            setUserList(responseBody.items.map((item) => item.login));
        } catch (err) {
          console.error(err);
          setUserList(false);
        }
      }, 500)
    );
  }

  return (
    <div className={classes.container}>
      <div>Search GitHub user</div>
      <div>
        <input
          type="text"
          placeholder="Username here"
          onChange={(e) => search(e.target.value)}
        />
      </div>
      <div className={classes.list}>
        {userList &&
          userList.map((user) => (
            <div key={user}>
              <a href={`https://github.com/${user}`} target="_blank">
                {user}
              </a>
            </div>
          ))}
        {!userList && <div>No result</div>}
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  list: {
    flex: 1,
    overflow: "auto",
  },
});
