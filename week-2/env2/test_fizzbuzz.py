from fizzbuzz import fizzbuzz


def test_fizzbuzz():
    assert fizzbuzz(1)
    assert fizzbuzz(2) == 2
    assert fizzbuzz(3) == "Pepsi"
    assert fizzbuzz(5) == "Coke"
    assert fizzbuzz(6) == "Pepsi"
    assert fizzbuzz(10) == "Coke"
    assert fizzbuzz(15) == "PepsiCoke"
