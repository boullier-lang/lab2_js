//calculates the total of the pastries being purhased. gives error if quantity is negative
function update() {
	//TODO
	let total_pastries = 0;
	let total_cost=0;
	quantities = document.getElementsByClassName("quant");
	prices = document.getElementsByClassName("cost");

	for(let i=0; i<quantities.length; i++)
	{
		let quant = parseInt(quantities[i].value);
		let price = parseFloat(prices[i].innerText);

		if(!quant)
		{
			quantities[i].style.backgroundColor = "red";
			console.error("THIS ONE AINT A NUMBER");
		}
		else if(quant < 0)
		{
			quantities[i].style.backgroundColor = "red";
			console.error("THIS ONE IS NEGATIVE STOP IT");
		} else {
			quantities[i].style.backgroundColor="white";
			total_cost += (quant * price);
			total_pastries += quant;

		}

		
	}

	document.getElementById("totalCost").innerHTML = total_cost;
	document.getElementById("quantTotal").innerHTML = total_pastries;
	
}