def printFunction(num):
    if num == 1:
        return "1"
    elif num == 2:
        return "2"

    elif num == 3:
        return "Pepsi"
    elif num == 5:
        return "Coke"

    elif num % 3 == 0 and num % 5 == 0:
        return "PepsiCoke"

    elif num % 3 == 0:
        return "Pepsi"
    elif num % 5 == 0:
        return "Coke"
    else:
        return "None"

num=int(input('Enter a Number: '))
print(printFunction(num))