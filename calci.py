def add(x, y): return x + y
def sub(x, y): return x - y 
def mul(x, y): return x * y 
def div(x, y):
    if y == 0:
        return "Error!"
    return x / y

ch = input("Enter \n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n")

while True:

    if ch in ('1', '2', '3', '4','5'):
        n1 = int(input("Enter first number: "))
        n2 = int(input("Enter second number: "))

        if ch == '1':
            print(add(n1, n2))
            break
        elif ch == '2':
            print(sub(n1, n2))
            break
        elif ch == '3':
            print(mul(n1, n2))
            break
        elif ch == '4':
                print(div(n1, n2))
                break
    else:
        print("Invalid input")