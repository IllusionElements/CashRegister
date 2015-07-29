$(document).ready(function(){
	$('#target2').hide();
	$('#check').on('click', function(e){
		e.preventDefault();
		var item = $('#item').val();
		var quantity = $('#quantity').val();
		var staff = $('#staff').val();

			    cashRegister.scan(item, quantity);

		 if(Stock[item] !== undefined && quantity >= 0) {
			    cashRegister.scan(item, quantity);


		 }

		 else {
		 	alert("This Item Does Not Exist!");		 	
		 }
		if(staff.length > 0 && typeof staffMembers[staff] !='undefined'){
			cashRegister.applyStaffDiscount(staffMembers[staff]);
		}

		var output = document.getElementById("result");
		result.innerHTML = 'Your bill is ' + cashRegister.total.toFixed(2);


		$('#target2').fadeIn(5000)
		 // .animate({opacity: 0.5}, 3000)
		 .fadeOut(5000);
	});


	$('#target').submit(function(){
		var info = $(this).serializeJSON();
		console.log(info);		
		var data = JSON.parse('[info]');
		console.log(data);
		return false;
	});

	


});






