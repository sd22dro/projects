# Import Required Libraries
import os
import re
import spacy
import pandas as pd
import docx2txt
import PyPDF2
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the SpaCy NLP model for Named Entity Recognition (NER)
nlp = spacy.load('en_core_web_sm')

# Function to Extract Text from Resumes
def extract_text_from_file(file_path):
    text = ""
    if file_path.endswith('.pdf'):
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfFileReader(file)
            for i in range(reader.numPages):
                text += reader.getPage(i).extract_text()
    elif file_path.endswith('.docx'):
        text = docx2txt.process(file_path)
    elif file_path.endswith('.txt'):
        with open(file_path, 'r') as file:
            text = file.read()
    return text

# Function to Extract Named Entities from Resume Text
def extract_entities(resume_text):
    doc = nlp(resume_text)
    entities = {
        'Name': None,
        'Email': None,
        'Phone': None,
        'Skills': []
    }
    for ent in doc.ents:
        if ent.label_ == 'PERSON' and entities['Name'] is None:
            entities['Name'] = ent.text
        elif ent.label_ == 'EMAIL':
            entities['Email'] = ent.text
        elif ent.label_ == 'PHONE':
            entities['Phone'] = ent.text
    return entities

# Function to Extract Skills from Resume using Keywords
def extract_skills(resume_text, skills_keywords):
    found_skills = set()
    resume_text = resume_text.lower()
    for skill in skills_keywords:
        if re.search(r'\b' + re.escape(skill.lower()) + r'\b', resume_text):
            found_skills.add(skill)
    return list(found_skills)

# Evaluation Function Based on Skill Matching
def evaluate_resume(resume_text, job_description):
    # Extract entities
    entities = extract_entities(resume_text)
    # Skill matching
    jd_skills = extract_skills(job_description, skills_keywords)
    resume_skills = extract_skills(resume_text, skills_keywords)
    matched_skills = set(jd_skills).intersection(set(resume_skills))
    score = len(matched_skills) / len(jd_skills) * 100
    return {
        'Name': entities['Name'],
        'Email': entities['Email'],
        'Phone': entities['Phone'],
        'Matched Skills': matched_skills,
        'Match Percentage': score
    }

# Set up a list of skills keywords to search for
skills_keywords = [
    'Python', 'Java', 'C++', 'Project Management', 'SQL', 'Data Analysis',
    'Machine Learning', 'Deep Learning', 'NLP', 'Communication', 'Team Leadership'
]

# Main Function to Analyze Resume
def analyze_resume(resume_file, job_description):
    resume_text = extract_text_from_file(resume_file)
    evaluation = evaluate_resume(resume_text, job_description)
    return evaluation

# Example Usage
if __name__ == "__main__":
    # File paths for testing
    resume_file = 'sample_resume.docx'  # Replace with the resume file path
    job_description = "We are looking for a software engineer with skills in Python, Machine Learning, and SQL."
    result = analyze_resume(resume_file, job_description)
    print(result)

# Save this script as resume_analyzer.py and run using Python to analyze resumes based on a given job description.
