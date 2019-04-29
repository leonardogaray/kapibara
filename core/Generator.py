import json
import importlib
from pathlib import Path

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
			file = open('{0}/index.json'.format(self.args["--path"]), 'r')
			self.manifestFile = json.load(file)
			self.generateFrontend(self.manifestFile["app"]["frontend"])
		else:
			print("Missing 'path' argument. IE: --path=/usr/... ")

	def generateFrontend(self, frontend):
		folder = "templates.frontend.{0}.{1}.Run".format(frontend.split("-")[0], frontend.split("-")[1])
		Run = importlib.import_module(folder, package=None)
		run = Run.Run(self.manifestFile["name"], self.args["--path"], Path().absolute())
		run.execute()

	def splitArguments(self):
		for value in self.arguments[1:]:
			if(value.startswith("--")):
				argName, argValue = value.split("=")
				self.args[argName] = argValue
