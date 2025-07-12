def myFun(*argv):
    for arg in argv:
        print(arg)


myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks')


def my(*args):
    for i in args:
        print(i)
my(21,25,25.6,"Python","php")


def stu(**kwargs):
    for k,v in kwargs.items():
        print(k,":",v)
stu(name="namrata",age=21,city="jalgaon")


def fun1(**kwargs):                         # print value in keyword length variable
    for v in kwargs.values():
        print(v)
fun1(name="namrata",age=21,city="jalgaon")
