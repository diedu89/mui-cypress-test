import React from "react";
import "./App.css";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

function App() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          id="test-dp"
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField id="test-dp" {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default App;
