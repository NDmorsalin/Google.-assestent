var ndmMath={
    morsalin:function(base,power){
        var result = 1, x, p;
        
        //make the power positive for looping 
        if( power < 0 ){
          p = ( power * ( -1 ) );
        }else{
            p = power;
        }
        
        //loop start 
        for( var i = 1;i <= p; i++ ){
            
         if( power > 0 ){
            x = ( result*= base );
           
            }
           else if( power < 0){
               x = 1 / ( result *= base );
           }
       }//For colose
       return x;
      }//function close
      
    };//Object close
  
   console.log( ndmMath.morsalin(2, 1) );



