import json
import importlib
import distutils.dir_util
import os
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
			self.clean()
			self.generateFrontend(self.manifestFile["app"]["frontend"])
			self.generateApplication(self.manifestFile["app"]["application"])
		else:
			print("Missing 'path' argument. IE: --path=/usr/... ")

	def clean(self):
		distutils.dir_util.remove_tree("../applications/{0}/.preBuild".format(self.manifestFile["name"]))
		distutils.dir_util.remove_tree("../applications/{0}/build".format(self.manifestFile["name"]))

	def generateFrontend(self, frontend):
		print("Generating Frontend .... ")
		folder = "templates.frontend.{0}.{1}.Run".format(frontend.split("-")[0], frontend.split("-")[1])
		Run = importlib.import_module(folder, package=None)
		run = Run.Run(self.manifestFile["name"], self.args["--path"], Path(__file__).resolve().parent)
		run.execute()

	def generateApplication(self, application):
		print("Generating Application .... ")
		folder = "templates.application.{0}.{1}.Run".format(application.split("-")[0], application.split("-")[1])
		Run = importlib.import_module(folder, package=None)
		run = Run.Run(self.manifestFile["name"], self.manifestFile["version"], self.args["--path"], Path(__file__).resolve().parent)
		run.execute()

	# Split arguments from command line starting with "--"
	def splitArguments(self):
		for value in self.arguments[1:]:
			if(value.startswith("--")):
				argName, argValue = value.split("=")
				self.args[argName] = argValue
