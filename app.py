import random
from flask import Flask, render_template # type: ignore

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/arrays")
def arrays():

    array = random.sample(range(1,100),8)

    return render_template(
        "arrays.html",
        array=array
    )


@app.route("/sliding-window")
def sliding_window():
    return render_template("sliding_window.html")


@app.route("/binary-search")
def binary_search():

    array = random.sample(range(1,100),8)

    array.sort()

    return render_template(
        "binary_search.html",
        array=array
    )


@app.route("/trees")
def trees():
    return render_template("trees.html")


if __name__ == "__main__":
    app.run(debug=True)
