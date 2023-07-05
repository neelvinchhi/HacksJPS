import openai
from credentials import OPENAI_KEY
from flask import Flask, jsonify, request
from flask_cors import CORS

openai.api_key = OPENAI_KEY

app = Flask(__name__)
CORS(app)

def generate_response(prompt):
    response = openai.Completion.create(
        engine='text-davinci-003',  
        prompt=prompt,
        max_tokens=2000,  
        n=1,
        stop=None, 
        temperature=0.7,  
    )
    return response.choices[0].text.strip()

@app.route('/generate', methods=["POST"])
def generate():
    try:
        response = request.json
        prompt = f"generate a simple recipe with the following ingredients: {response['text']}"
        final_response = generate_response(prompt)
        return jsonify({"status": "success", "data": final_response})
    except Exception as e:
        print(e)
        return jsonify({"status": "failed", "data": {}})

if __name__ == "__main__":
    app.run(debug=True)
