var n,x,s=0,r

n=prompt("Enter a number")

x=n

while(x!=0)
{
    r=x%10
    s=s*10+r
    x=parseInt(x/10)
}

document.write("Reverse of the no. is "+s)
document.write("<br>")

if(s==n)
document.write("Number is a palindrome")

else
document.write("Number is not a palindrome")
