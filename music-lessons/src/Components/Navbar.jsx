import { Line, Column, Between } from "../Layouts/layouts";

export function Navbar() {
  return (
    <Between className="navbar">
      <Column>Lessons4u</Column>
      <Line>
        <Column>Home</Column>
        <Column>Search</Column>
        <Column>Recommendations</Column>
        <Column>Profile</Column>
      </Line>
      <Line>
        <Column>Login</Column>
        <Column>Become a member</Column>
      </Line>
    </Between>
  );
}
