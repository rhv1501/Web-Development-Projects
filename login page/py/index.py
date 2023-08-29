n=int(input("enter the value:"))
mult=int(input("enter the fkn value"))
sum=0
mult=1
while n>1:
    r=n%10
    sum=sum+r
    mult=mult+r
    r=n//10
    print("the value of sum is",sum)
    print("the value of product is",mult)

        