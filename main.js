var ndmMath={
    morsalin:function(base,power){
        var arr=[],result;
        for(var i=0;i<power;i++){
            arr[i]=base;
           var res=1;
            for(j=0;j<arr.length;j++){ 
            res=res*arr[j];
            }
        }
      return res;
        
      }
    };
    console.log(Math.pow(10,2));
   console.log(ndmMath.morsalin(2,3));



