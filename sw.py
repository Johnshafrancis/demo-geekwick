num1 = float(input("enter first number : "))
choice = input("enter operator (+,-,*,/): ")
num2 = float(input("enter second number : "))

if choice == '+':
    result = num1 + num2
elif choice == '-':
    result = num1 - num2
elif choice == '*':
    result = num1 * num2
elif choice == '/':
    result = num1 / num2
else:
    print("invalid choice")

print("Result:", result)
