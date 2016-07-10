# endtoend test for sample app


	#Initial Setup
		Below are the packages required for setup
		nodejs - v5.10.1
		npm - v3.8.3
		nightwatch - v0.9.5	
		selenium-server-standalone-2.53.1


	#Running selenium server manually
		To run the selenium server manually, from the directory with the jar run the following:
		$ java -jar selenium-server-standalone-{VERSION}.jar

	#Install packages
		npm install

	#Test execution
		$ ./node_modules/.bin/nightwatch [source] 	
		
'Currently default commandline and xml report is generated.

'CI - https://snap-ci.com/DeChrish/tw-marsair/branch/master