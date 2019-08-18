import os
import distutils.dir_util
import glob
import re
from jinja2 import Environment, FileSystemLoader

class Run():
    def __init__(self, appName, appVersion, templatePath, appPath):
        self.appName = appName
        self.appVersion = appVersion
        self.templatePath = templatePath
        self.appPath = appPath
        self.preBuildPath =  "{0}/.preBuild".format(self.templatePath)
        self.buildPath =  "{0}/build".format(self.templatePath)

    def execute(self):
        #If build folder does not exist, create it
        if not os.path.exists(self.preBuildPath):
            os.makedirs(self.preBuildPath)

        #if (not os.path.exists("{0}/{1}".format(self.preBuildPath, self.appName))
        #    or (os.path.exists("{0}/{1}".format(self.preBuildPath, self.appName))
        #    and not os.path.isfile("{0}/{1}/package.json".format(self.preBuildPath, self.appName)))):
        sourcePath = "{0}/templates/application/spring/5_0/skeleton".format(self.appPath)
        destinationPath = "{0}/{1}".format(self.preBuildPath, "application")
        # Copy the full tree structure
        distutils.dir_util.copy_tree(sourcePath, destinationPath)

        self.render(destinationPath)

        os.chdir("{0}/{1}".format(self.buildPath, "application"))
        os.system("gradle build && java -jar build/libs/{0}-{1}.jar".format(self.appName,self.appVersion))
        #else:
        #    print("Angular already exists!")

    def render(self, destinationPath):
        for root, dirs, files in [f for f in os.walk(destinationPath)]:
            for dirName in dirs:
                if(dirName.endswith("__appPackageName__")):
                    directory = root + "/" + dirName
                    newDirectory = root + "/" + dirName.replace("__appPackageName__", self.appName)
                    os.rename(directory, newDirectory)

            for fileName in files:
                f = root + "/" + fileName
                if not f.endswith((".ico",".jpg",".jpeg",".png")) :
                    env = Environment(
                        loader=FileSystemLoader(destinationPath),
                        trim_blocks=True,
                        block_start_string='<%%',
                        block_end_string='%%>',
                        variable_start_string='_%%',
                        variable_end_string='%%_',
                        comment_start_string='<%%#',
                        comment_end_string='#%%>')
                    template = env.get_template(f.replace(destinationPath,"").replace("__appPackageName__", self.appName))
                    output_from_parsed_template = template.render(appName=self.appName)

                    renderedFile = f.replace("/.preBuild/","/build/").replace("__appPackageName__", self.appName)
                    os.makedirs(os.path.dirname(renderedFile), exist_ok=True)

                with open(renderedFile, "w") as fh:
                    fh.write(output_from_parsed_template)
