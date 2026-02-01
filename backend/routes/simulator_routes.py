from flask import Blueprint, request, jsonify
from services.simulator_service import get_simulation_for_career, evaluate_submission

simulator_bp = Blueprint('simulator', __name__)

@simulator_bp.route('/simulator/<career_id>', methods=['GET'])
def get_simulation(career_id):
    data = get_simulation_for_career(career_id)
    return jsonify(data)

@simulator_bp.route('/simulator/<career_id>/result', methods=['POST'])
def submit_simulation(career_id):
    answers = request.json.get('answers')
    result = evaluate_submission(career_id, answers)
    return jsonify(result)
