import "./App.css";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "40%" }}>
        <Card>
          <Stack spacing={2} padding={5}>
            <Typography variant="h3">Login</Typography>
            <TextField label="User name" variant="filled" />
            <TextField type="password" label="Password" variant="filled" />
            <Button variant="outlined">Login</Button>
          </Stack>
        </Card>
      </div>
    </div>
  );
}

export default App;
