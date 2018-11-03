  const butt = document.querySelector(".butt");
        const tip = document.querySelector(".aim");
        tip.style.transform="translateX(30px)";
        function tipcalculator() {
        let value;
        let each;
    	let amount = document.querySelector(".amount").value;
    	let opt = document.querySelector("select").value;
    	let peopleno = document.querySelector(".peopleno").value;
    	var td = document.querySelector(".text");
    	
    	console.log(amount,opt,peopleno);
    	if(amount===""||opt==="")
    	alert("Please enter values");
        else if(amount!=""&&(peopleno===""||peopleno==="1")&&opt!="")
        {
              peopleno = 1;
              each = "";
              calculator(amount,opt,peopleno,td,each);
        }
        else if(amount!=""&&(peopleno>"1")&&opt!="")
        	   each = "each";
               calculator(amount,opt,peopleno,td,each);
        }
        butt.addEventListener("click",function(){
        	tipcalculator();
        })
       function calculator(amount,opt,peopleno,td,each){
            let ans;
    		ans = amount*opt/(peopleno*100);
    		 ans = Math.round(ans * 100) / 100;
             ans = ans.toFixed(2);
            td.innerText = "$" + ans + each;
                          }

