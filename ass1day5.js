/* A Javascript to print numbers from one to 20 with some basic tasks written by Obikoya Olumide Joseph*/
for (var i=1; i<21; i++)
{
    console.log(i);
    
    if(i%3==0)
    {
      console.log (i, "Fizz ") ;
    }
    else if (i%5==0)
    {
        console.log (i,"buzz");
    }
    else if (i%3==0 && i%5==0)
    {
    	console.log (i,"fizzbuzz");

    }
    else
    {
    	console.log (i,"none");
    }
} 
