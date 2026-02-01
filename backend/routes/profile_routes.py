from flask import Blueprint, request, jsonify
from services.profile_service import save_profile, get_profile

profile_bp = Blueprint('profile', __name__)

@profile_bp.route('/profile', methods=['POST'])
def create_profile():
    data = request.json
    user_id = save_profile(data)
    return jsonify({"success": True, "id": user_id})

@profile_bp.route('/profile/<user_id>', methods=['GET'])
def get_user_profile(user_id):
    profile = get_profile(user_id)
    if profile:
        return jsonify(profile)
    return jsonify({"error": "Profile not found"}), 404
