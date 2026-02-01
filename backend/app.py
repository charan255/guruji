from flask import Flask
from flask_cors import CORS
from routes.profile_routes import profile_bp
from routes.career_routes import career_bp
from routes.simulator_routes import simulator_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(profile_bp, url_prefix='/api')
app.register_blueprint(career_bp, url_prefix='/api')
app.register_blueprint(simulator_bp, url_prefix='/api')

@app.route('/')
def home():
    return {"status": "active", "message": "Guruji Backend for Hackathon"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
