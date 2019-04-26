import json
import importlib

class Generator:
	def __init__(self, arguments):
		self.arguments = arguments
		self.args = {}

	def start(self):
		self.splitArguments()
		self.execute()

	def execute(self):
		self.readAppManifest()

	def readAppManifest(self):
		if "--path" in self.args:
			file = open(self.args["--path"] + '/index.json', 'r')
			self.manifestFile = json.load(file)
			self.generateFrontend(self.manifestFile["app"]["frontend"])
		else:
			print("Missing 'path' argument. IE: --path=/usr/... ")

	def generateFrontend(self, frontend):
		folder = "templates.frontend." + frontend.split("-")[0] + "." + frontend.split("-")[1] + ".Run"
		Run = importlib.import_module(folder, package=None)
		run = Run.Run()
		run.execute(self.manifestFile["name"], self.args["--path"])

	def splitArguments(self):
		for value in self.arguments[1:]:
			if(value.startswith("--")):
				argName, argValue = value.split("=")
				self.args[argName] = argValue
				#print("Arg: {0} Value:{1}".format(argName, argValue))
