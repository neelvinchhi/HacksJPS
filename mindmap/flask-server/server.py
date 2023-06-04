from flask import Flask, jsonify, request
from json import loads
from response import promptText
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=["POST", "GET"])
def generate():

    if request.method == "GET":
        return "GET REQUEST NOT SUPPORTED FOR THIS ROUTE"
    else:

        try:
            response = request.json
            # Return the GPT response
            final = loads(promptText(response["text"]))

            return jsonify({"status": "success", "data": final})
        except Exception as e:
            print(e)
            return jsonify({"status": "failed", "data": {}})

app.run(debug=True)


