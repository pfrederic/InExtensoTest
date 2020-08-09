import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

function App() {
  const classes = useStyles();

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxs, setCheckboxs] = useState(
    Array(5)
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
    setCheckAll(checkboxs.filter((item) => item.check === false).length == 0);
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
        Elements cochés :
        {checkboxs &&
          checkboxs
            .filter((item) => item.check === true)
            .map((checkbox) => {
              return <div>{checkbox.label}</div>;
            })}
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "10px",
  },
});

export default App;
