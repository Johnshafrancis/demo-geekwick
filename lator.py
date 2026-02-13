Operand_1 = float(input("Enter first number: "))
operator = input("Enter operator (+, -, *, /): ")
Operand_2 = float(input("Enter second number: "))

if operator == "+":
    result = Operand_1 + Operand_2
elif operator == "-":
    result = Operand_1 - Operand_2
elif operator == "*":
    result = Operand_1 * Operand_2
elif operator == "/":
    if Operand_2 != 0:
        result = Operand_1 / Operand_2
    else:
        result = "Error!"
else:
    result = "Invalid operator!"

print("Result:", result)
