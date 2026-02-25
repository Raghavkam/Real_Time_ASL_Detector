from flask import Flask, request, jsonify
import base64

app = Flask(__name__)

# Simple route to test if the video input is sent correctly
@app.route('/classify', methods=['POST'])
def classify():
    # Get the base64 image data sent from the frontend
    data = request.get_json()
    image_data = data['image']

    # Just print the received image data (you can remove this once you've confirmed it's working)
    print("Received image:", image_data[:100])  # Print only the first 100 characters

    # Return a dummy response
    return jsonify({'prediction': 'A'})  # Send a dummy response for testing

if __name__ == '__main__':
    app.run(debug=True)