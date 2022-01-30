class myClass:
    def __init__(self):
        self.myList = []
    def addToEnd(self, n):
        self.myList.append(n)
    def addTup(self, a, b):
        self.myList.append((a, b))
    def chageTuple(self): 
        self.myList = tuple(self.myList)
    def addDict(self, key, value): 
        self.myList.append({key: value})
    def printData(self):
        print(self.myList)

myNewClass = myClass()
myNewClass.addToEnd('Coding') 
myNewClass.addDict('key', 100)
myNewClass.addTup(10,('Hello World'))

myNewClass.printData()
myNewClass.chageTuple()
myNewClass.printData()