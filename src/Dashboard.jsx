function Dashboard({ user }) {
  return (
    <div>
      {user == "Nargis" ? (
        <h2>Welcome to inner circle, {user}</h2>
      ) : (
        <h2>Oh you must be new one in here, {user}</h2>
      )}
    </div>
  );
}
export default Dashboard;
