import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/careers.json')

def load_careers():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

def get_recommendations(user_profile):
    careers = load_careers()
    
    # Extract user skills (assuming dict {skill: level} or list)
    user_skills = user_profile.get('skills', {})
    
    # Normalize user skills to a dict if it is not
    if not isinstance(user_skills, dict):
        user_skills = {} # Fallback

    user_interests = set(user_profile.get('interests', []))
    
    recommendations = []
    
    for career in careers:
        score = 50 # Base score
        
        # Skill Match Logic
        # We check both direct skill name matches and category matches
        
        # 1. Interest Match
        career_interests = set(career.get('tags', []) + career.get('related', [])) # Use tags as proxy for interests
        # Also check if category matches an interest
        if career['category'] in user_interests:
            score += 10
            
        common_interests = user_interests.intersection(career_interests)
        score += len(common_interests) * 5
        
        # 2. Skill Category Match (Frontend Profile Mapping)
        # Profile has: coding, data, design, business, people, arts
        # Career has: tags like Coding, Data, Logic, Design, Creative, Business, Art, Performance
        
        if user_skills.get('coding', 0) > 3 and ('Coding' in career.get('tags', []) or 'Tech' in career.get('tags', [])):
            score += 15
        if user_skills.get('data', 0) > 3 and ('Data' in career.get('tags', []) or 'Logic' in career.get('tags', [])):
            score += 15
        if user_skills.get('design', 0) > 3 and ('Design' in career.get('tags', []) or 'Creative' in career.get('tags', [])):
            score += 15
        if user_skills.get('business', 0) > 3 and ('Business' in career.get('tags', []) or 'Strategy' in career.get('tags', [])):
            score += 15
        if user_skills.get('arts', 0) > 3 and ('Art' in career.get('tags', []) or 'Performance' in career.get('tags', [])):
            score += 15
            
        # Cap score
        score = min(score, 98)
        
        recommendations.append({
            'career': career,
            'score': score,
            'reasoning': career.get('reasoning', "Matches your profile.")
        })
    
    # Sort and return top 5
    recommendations.sort(key=lambda x: x['score'], reverse=True)
    return recommendations[:5]

def get_network_data():
    # Return the static network structure matching frontend's SIMILARITY_DATA
    # Ideally should be generated from data, but hardcoding for exact match with frontend reqs
    return {
      "nodes": [
        {"id": "da", "label": "Data Analyst", "group": "Data"},
        {"id": "ds", "label": "Data Scientist", "group": "Data"},
        {"id": "ux", "label": "UX Designer", "group": "Design"},
        {"id": "pd", "label": "Product Designer", "group": "Design"},
        {"id": "pm", "label": "Product Manager", "group": "Product"},
        {"id": "fe", "label": "Frontend Dev", "group": "Eng"},
        {"id": "se", "label": "Software Eng", "group": "Eng"},
        {"id": "mus", "label": "Musician", "group": "Arts"},
        {"id": "sin", "label": "Singer", "group": "Arts"},
        {"id": "act", "label": "Actor", "group": "Arts"},
        {"id": "dan", "label": "Dancer", "group": "Arts"},
        {"id": "vis", "label": "Visual Artist", "group": "Arts"},
        {"id": "flm", "label": "Filmmaker", "group": "Arts"}
      ],
      "links": [
        {"source": "da", "target": "ds", "value": 5},
        {"source": "ux", "target": "pd", "value": 5},
        {"source": "ux", "target": "fe", "value": 4},
        {"source": "fe", "target": "se", "value": 4},
        {"source": "pm", "target": "ux", "value": 3},
        {"source": "mus", "target": "sin", "value": 5},
        {"source": "mus", "target": "dan", "value": 4},
        {"source": "act", "target": "sin", "value": 3},
        {"source": "act", "target": "flm", "value": 4},
        {"source": "vis", "target": "flm", "value": 4},
        {"source": "vis", "target": "ux", "value": 3},
        {"source": "flm", "target": "pm", "value": 2},
        {"source": "dan", "target": "act", "value": 3}
      ]
    }

def get_career_risks(career_id):
    careers = load_careers()
    career = next((c for c in careers if c['id'] == career_id), None)
    if not career:
        return None
    
    return {
        "id": career['id'],
        "title": career['title'],
        "risks": career.get('risk_factors', {}),
        "tradeoffs": career.get('tradeoffs', []),
        "opportunity_cost": career.get('opportunity_cost', {})
    }
