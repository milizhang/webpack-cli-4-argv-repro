module.exports = (env, argv) =>
{
	console.log(argv.testArg);
	return {
		entry: "./index.js",
		output:
		{
			filename: "output.js",
		}
	}
}