import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/simulations.json')

def load_simulations():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

def get_simulation_for_career(career_id):
    sims = load_simulations()
    # Find sim for this career
    sim_data = next((s for s in sims if s['career_id'] == career_id), None)
    if not sim_data:
        # Fallback generic sim if not found
        return {
            "career_id": career_id,
            "scenarios": [
                {
                    "id": "gen_1", 
                    "description": "A generic challenge appears in your workday.", 
                    "options": [{"id": "a", "text": "Solve it.", "score": 10}]
                }
            ]
        }
    return sim_data

def evaluate_submission(career_id, answers):
    # Mock scoring logic
    score = 85
    return {
        "career_id": career_id,
        "score": score,
        "feedback": "Good job! You showed potential.",
        "enjoyment_score": 90
    }
