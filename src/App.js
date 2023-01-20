import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Detailsdashboard from "./Components/Detailsdashboard/Detailsdashboard";

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10">
					<Dashboard />
				</div>
				<div className="col-2">
					<Detailsdashboard />
				</div>
			</div>
		</div>
	);
}

export default App;
