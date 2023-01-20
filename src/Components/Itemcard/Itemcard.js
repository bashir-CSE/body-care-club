import React from "react";

function Itemcard(props) {
	const { btn, name, time, img } = props.careItem;
	const newTimes = props.times;
	// console.log(newTimes);
	// let a = 0
	for (const newTime of newTimes) {
		console.log(newTime);
	}
	return (
		<div className="col-sm-4 mb-2">
			<div className="card">
				<div className="card-body">
					<div className="img_container">
						<img src={img} class="card-img-top" alt="..." />
					</div>
					<h5 className="card-title">name: {name}</h5>
					<p className="card-text">time: {time} </p>
					<div
						className="btn btn-primary"
						onClick={() => props.btnClick(props.careItem)}
					>
						{btn}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Itemcard;
