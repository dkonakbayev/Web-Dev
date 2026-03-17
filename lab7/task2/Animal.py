class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Sound of animal"

    def info(self):
        return f"{self.name} is {self.age} years old"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof woof"

    

class Cat(Animal):
    def __init__(self, name, age, color, gender):
        super().__init__(name, age, color)
        self.gender = gender

    def speak(self):
        return "Myau"

    