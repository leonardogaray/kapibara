import os

class Run():
    def execute(self, appName, path):
        path = path + "/build"
        #If build folder does not exist, create it
        if not os.path.exists(path):
            os.makedirs(path)
        os.chdir(path)
        if (not os.path.exists(path + "/" + appName)) or (os.path.exists(path + "/" + appName) and not os.path.isfile(path + "/" + appName + "/package.json")):
            os.system("ng new " + appName)
        else:
            print("Angular already exists!")
