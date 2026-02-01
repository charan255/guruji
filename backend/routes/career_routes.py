from flask import Blueprint, request, jsonify
from services.recommendation_service import get_recommendations, get_network_data, get_career_risks
from services.comparison_service import compare_careers_logic

career_bp = Blueprint('careers', __name__)

@career_bp.route('/recommendations', methods=['POST'])
def recommendations():
    profile = request.json
    recs = get_recommendations(profile)
    return jsonify(recs)

@career_bp.route('/careers/network', methods=['GET'])
def network():
    data = get_network_data()
    return jsonify(data)

@career_bp.route('/career/<career_id>/risks', methods=['GET'])
def risks(career_id):
    data = get_career_risks(career_id)
    if not data:
        return jsonify({"error": "Career not found"}), 404
    return jsonify(data)

@career_bp.route('/compare', methods=['GET'])
def compare():
    cA = request.args.get('careerA')
    cB = request.args.get('careerB')
    result = compare_careers_logic(cA, cB)
    if not result:
        return jsonify({"error": "Invalid careers"}), 400
    return jsonify(result)
    
@career_bp.route('/careers', methods=['GET'])
def all_careers():
    # Helper for frontend comparison selector to get list
    from services.recommendation_service import load_careers
    return jsonify(load_careers())
