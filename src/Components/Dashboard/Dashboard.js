import React, { useEffect, useState } from "react";
import Itemcard from "../Itemcard/Itemcard";

function Dashboard() {
	const [careItems, setCareItems] = useState([]);
	const [times, setTime] = useState([]);

	useEffect(() => {
		return () => {
			fetch("/api.json")
				.then((res) => res.json())
				.then((data) => setCareItems(data));
		};
	}, []);

	const btnClick = (id) => {
		const newTime = [...times, id];
		setTime(newTime);
	};

	return (
		<div>
			<div className="header">
				<h3>body care club</h3>
			</div>
			<div className="row">
				{careItems.map((careItem) => {
					// console.log(careItem);
					return (
						<Itemcard
							btnClick={btnClick}
							key={careItem.id}
							careItem={careItem}
							times={times}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
