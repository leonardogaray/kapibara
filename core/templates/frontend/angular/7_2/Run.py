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
        sourcePath = "{0}/templates/frontend/angular/7_2/skeleton".format(self.appPath)
        destinationPath = "{0}/{1}".format(self.preBuildPath, "frontend")
        distutils.dir_util.copy_tree(sourcePath, destinationPath)

        self.render(destinationPath)

        os.chdir("{0}/{1}".format(self.buildPath, "frontend"))
        os.system("npm install")
        #else:
        #    print("Angular already exists!")

    def render(self, destinationPath):
        #files = [f for f in os.walk(destinationPath)]
        for root, dirs, files in [f for f in os.walk(destinationPath)]:
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
                    template = env.get_template(f.replace(destinationPath,""))
                    output_from_parsed_template = template.render(appName=self.appName)

                    renderedFile = f.replace("/.preBuild/","/build/")
                    os.makedirs(os.path.dirname(renderedFile), exist_ok=True)

                with open(renderedFile, "w") as fh:
                    fh.write(output_from_parsed_template)
