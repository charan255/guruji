import json
import os
import uuid

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/users.json')

def load_users():
    if not os.path.exists(DATA_PATH):
        return []
    with open(DATA_PATH, 'r') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_users(users):
    with open(DATA_PATH, 'w') as f:
        json.dump(users, f, indent=4)

def save_profile(data):
    users = load_users()
    new_id = str(uuid.uuid4())
    data['id'] = new_id
    users.append(data)
    save_users(users)
    return new_id

def get_profile(user_id):
    users = load_users()
    return next((u for u in users if u.get('id') == user_id), None)
