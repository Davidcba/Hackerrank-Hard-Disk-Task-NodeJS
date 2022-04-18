function solution (x, space){
    if (x > space.length) {
      return console.error("The provided range is bigger than the array length");
      
    } else  {

    let minima_arr = [];
    
    for (let i = 0; i  <= space.length; i++){
      
      if (space.length >= i + x ){
        
        let sub_arr = space.slice(i, i+x);
      
        minima_arr.push(Math.min(...sub_arr));
        
      }
      
    }
    return Math.max(...minima_arr);
  }
}