import pytest

class testClass:
  def __init__(self):
      self.myList = []
      
  def addItem(self, item):
    self.myList.append(item)
    return self.myList
  
  def showList(self):
    print(self.myList)

  def searchList(self, item):
      for i in self.myList:
          if item == i:
              return i
          
          
          
# t1 = testClass()
# t1.addItem(1)
# t1.addItem(2)
# t1.addItem(3)
# t1.addItem(4)
# t1.addItem(5)
# t1.addItem("addingString")
# t1.showList()


@pytest.fixture
def t1():
    t1 = testClass()
    return t1

def test_callClass():
    testClass()
    
def test_addItem(t1):
    assert t1.addItem("addingString") == ["addingString"]
    
def test_showList(t1):
    print(t1.showList())
    
def test_searchList(t1):
    t1.addItem("anotherString")
    assert t1.searchList("anotherString") == "anotherString"
      
    
    
  



