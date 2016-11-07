/* Assignment day 5 */
/* Program to check staff level*/
var numYear;

numYear=prompt("Enter the number of year"," ");

if (numYear<=10)
{
 console.log("You are a Level", numYear ,"Staff,and your Designation is casual Staff");
}

else if (numYear<=20)
{
console.log("You are a level", numYear,"staff,and your Designation is Junior Staff");
}

else if (numYear<=30)
{
	console.log("You are a level",numYear,"staff,and your Designation is Senior Staff");
}

else if (numYear<=40)
{
	console.log("You are a level",numYear,"staff,and your Designation is Manager");
}

else if (numYear<=50)
{
	console.log("You are a level", numYear," staff,and your Designation is Director");
}

else if(numYear>50)
{
  console.log("You are a level", numYear," staff,and your Designation is Member Board of Directors");
}