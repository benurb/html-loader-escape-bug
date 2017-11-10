const withInterpolation = process.env.INTERPOLATE === "true";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: require("path").join(__dirname, "output"),
        filename: "[name].js"
    }
}