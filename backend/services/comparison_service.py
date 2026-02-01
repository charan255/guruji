import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/careers.json')

def load_careers():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

def compare_careers_logic(idA, idB):
    careers = load_careers()
    cA = next((c for c in careers if c['id'] == idA), None)
    cB = next((c for c in careers if c['id'] == idB), None)
    
    if not cA or not cB:
        return None
        
    # Calculate overlaps
    skillsA = set(s if isinstance(s, str) else s.get('name', '') for s in cA.get('skills', []))
    skillsB = set(s if isinstance(s, str) else s.get('name', '') for s in cB.get('skills', []))
    
    common_skills = list(skillsA.intersection(skillsB))
    uniqueA = list(skillsA.difference(skillsB))
    uniqueB = list(skillsB.difference(skillsA))
    
    return {
        "careerA": cA,
        "careerB": cB,
        "overlap": {
            "common_skills": common_skills,
            "unique_to_A": uniqueA,
            "unique_to_B": uniqueB,
            "similarity_score": len(common_skills) * 10
        }
    }
