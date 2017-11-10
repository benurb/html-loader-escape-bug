require("file-loader?name=with-interpolate.html!extract-loader!html-loader?interpolate!./test.html");

require("file-loader?name=without-interpolate.html!extract-loader!html-loader?!./test.html");