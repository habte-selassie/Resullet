import React, { useState } from "react";
import { ethers } from "ethers";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const MetamaskConnection = () => {
	const [data, setdata] = useState({
		address: "",
		Balance: null,
	});

	const getbalance = (address) => {
		// Requesting balance method
		window.ethereum
			.request({
				method: "eth_getBalance",
				params: [address, "latest"],
			})
			.then((balance) => {
				// Setting balance
				setdata({
					address,
					Balance: ethers.utils.formatEther(balance),
				});
			});
	};
	// Function for getting handling all events
	const accountChangeHandler = (account) => {
		// Setting an address data
		setdata({
			address: account,
		});

		// Setting a balance
		getbalance(account);
	};

	const btnhandler = () => {
		// Asking if metamask is already present or not
		if (window.ethereum) {
			// res[0] for fetching a first wallet
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then((res) => accountChangeHandler(res[0]));
		} else {
			alert("install metamask extension!!");
		}
	};

	return (
		<div>
			<div>
				<b>
					<strong>Address: </strong>
					{data.address}
				</b>
				<div>
					<span>
						<strong>Balance: </strong>
						{data.Balance}
					</span>
					<button onClick={btnhandler}>Connect to wallet</button>
				</div>
			</div>
		</div>
	);
};

export default MetamaskConnection;
