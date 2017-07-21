const NumberHelpers = {
    baseNumberArray: (number,base)=>{
		if( 0 <= number && number < (Math.pow(base,2))){
			if(2 <= base && base<= 16 ){
				return  result = [Math.floor(number/base),(number%base)];
			}
			else {return "2 <= base <= 16"}
		}
		else {return "0 <= number < base^2"}
    }
}