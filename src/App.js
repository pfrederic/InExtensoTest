import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import SearchUser from "component/SearchUser";

function App() {
  const classes = useStyles();

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxs, setCheckboxs] = useState(
    Array(4)
      .fill({})
      .map((item, index) => {
        return { label: "Item " + index, check: false };
      })
  );

  function itemClick(event) {
    setCheckboxs(
      checkboxs.map((item) => {
        if (item.label === event.target.value) {
          item.check = event.target.checked;
        }
        return item;
      })
    );
    setCheckAll(checkboxs.filter((item) => item.check === false).length === 0);
  }

  function checkAllClick(event) {
    setCheckAll(event.target.checked);
    setCheckboxs(
      checkboxs.map((item) => {
        return { ...item, check: event.target.checked };
      })
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.child}>
        Select World !
        <div>
          <input type="checkbox" checked={checkAll} onClick={checkAllClick} />
          <span>Select all</span>
        </div>
        <div>
          {checkboxs &&
            checkboxs.map((checkbox) => {
              return (
                <div key={checkbox.label}>
                  <input
                    type="checkbox"
                    value={checkbox.label}
                    checked={checkbox.check}
                    onClick={itemClick}
                  />
                  <span>{checkbox.label}</span>
                </div>
              );
            })}
        </div>
        <div>
          Items checked :
          {checkboxs &&
            checkboxs
              .filter((item) => item.check === true)
              .map((checkbox) => {
                return <div>{checkbox.label}</div>;
              })}
        </div>
      </div>
      <div className={classes.child}>
        <SearchUser />
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "#F9EBEA",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    margin: "10px",
    borderRadius: "0.25rem",
    height: "300px",
    boxShadow:
      "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)",
  },
});

export default App;
