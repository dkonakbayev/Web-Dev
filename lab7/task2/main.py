from Animal import Cat , Dog

def main():
    dog1 = Dog("Aqtaban" , 3 , "black and white" , "Buldog")
    dog2 = Dog("Aqtos" , 5 , "white" , "Kazakh")
    cat1 = Cat("Hurem" , 2 , "gray" , "girl")
    cat2 = Cat("Jerry" , 6 , "pink" , "Male")
    
    animals = []
    animals.append(dog1)
    animals.append(dog2)
    animals.append(cat1)
    animals.append(cat2)
    
    
    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())
        print("---")
        

if __name__ == "__main__":
    main()