📄 Resume Analyzer
Analyze resumes with ease and precision.
This Python-based Resume Analyzer extracts and evaluates candidate information from resumes, matching skills to job descriptions using Natural Language Processing (NLP) techniques.

✨ Features
🖋 Resume Parsing: Extracts text from resumes in .pdf, .docx, or .txt formats.
🤖 Named Entity Recognition (NER): Identifies candidate details like:
Name
Email
Phone Number
🛠 Skill Matching: Compares resume skills to job descriptions using keyword matching.
📊 Evaluation: Provides a match percentage and lists matched skills.
🛠 Technologies Used
Python: Core programming language.
SpaCy: For Natural Language Processing (NLP) and Named Entity Recognition (NER).
Pandas: For structured data processing.
PyPDF2: For reading PDF files.
docx2txt: For reading .docx files.
scikit-learn: For feature extraction and similarity computation.
📂 Project Structure

resume-analyzer/
│
├── resume_analyzer.py    
├── sample_resume.docx    
└── README.md            
⚙️ Prerequisites
Ensure the following are installed on your system:

Python 3.7+
Required Python libraries:
spacy
pandas
docx2txt
PyPDF2
scikit-learn
🚀 Installation and Setup
Follow these steps to get started with the Resume Analyzer:

Clone the Repository:


git clone https://github.com/yourusername/projects.git
Navigate to the Resume Analyzer Directory:


cd projects/resume-analyzer
Install Dependencies: Install the required Python libraries:


pip install spacy pandas docx2txt PyPDF2 scikit-learn
Download the SpaCy NLP Model:

python -m spacy download en_core_web_sm
▶️ How to Run the Application
Open a terminal in the resume-analyzer directory.

Run the script:


python resume_analyzer.py
Provide the following inputs in the code:

Resume File Path: Path to the resume (e.g., sample_resume.docx).
Job Description: A text-based job description (modify the variable in the script).
View the output, which includes:

Candidate name, email, and phone number.
Matched skills.
Match percentage.
📝 Example Usage
Input
Resume File: sample_resume.docx
Job Description:
"We are looking for a software engineer with skills in Python, Machine Learning, and SQL."
Output

{
    "Name": "John Doe",
    "Email": "johndoe@gmail.com",
    "Phone": "123-456-7890",
    "Matched Skills": ["Python", "Machine Learning", "SQL"],
    "Match Percentage": 75.0
}
📖 How it Works
Extract Text: Reads the resume file and extracts text using:
PyPDF2 for PDFs
docx2txt for .docx
Built-in Python open for .txt
Named Entity Recognition: Uses SpaCy to extract key details like name, email, and phone number.
Skill Matching: Matches skills from the resume to the job description using predefined skill keywords.
Evaluation: Calculates a match percentage based on matched skills.

🛡 License
This project is licensed under the MIT License.