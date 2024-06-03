import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const useCourses = () => {
  return useContext(CourseContext);
};

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      "id": 1,
      "title": "Capítulo 1 - Introduções",
      "description": "Learn the basics of Portuguese including greetings, numbers, and simple phrases.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course covers the basics of the Portuguese language, including common greetings, numbers, and simple phrases. It is designed for beginners with no prior knowledge of Portuguese.",
      "skills": [
        "Understand basic Portuguese greetings",
        "Count from 1 to 100 in Portuguese",
        "Form simple sentences"
      ],
      "image": "https://t4.ftcdn.net/jpg/02/42/46/31/360_F_242463114_3Jiiq6QRNVhGPlIVqGxqlBkG062Q5Lqy.jpg",
      "syllabus": [
        {
          "title": "Basic Portuguese",
          "description": "Learn the basics of Portuguese including greetings, numbers, and simple phrases.",
          "modules": [
            { "type": "Lesson", "name": "Introductions and Greetings", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Numbers and Counting", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Simple Sentences", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Basic Portuguese Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG4QfrMoc/7uZzCAsVdkXXV5ivOkHuOg/view?utm_content=DAGG4QfrMoc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 2,
      "title": "Capítulo 2 - Numeros e Letras",
      "description": "Learn to count and recognize letters in Portuguese.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course teaches you how to count from 1 to 100 and recognize the letters of the Portuguese alphabet. It is designed for beginners with no prior knowledge of Portuguese.",
      "skills": [
        "Count from 1 to 100 in Portuguese",
        "Recognize and pronounce Portuguese letters",
        "Spell simple words"
      ],
      "image": "https://png.pngtree.com/thumb_back/fw800/background/20221120/pngtree-beautiful-woman-counting-three-number-with-fingers-adult-isolated-woman-photo-image_693211.jpg",
      "syllabus": [
        {
          "title": "Numbers and Letters",
          "description": "Learn to count and recognize letters in Portuguese.",
          "modules": [
            { "type": "Lesson", "name": "Counting from 1 to 100", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Portuguese Alphabet", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Spelling Simple Words", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Numbers and Letters Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG4eE2Wp8/F2X9i3AhGSN-ME0S1ccMgQ/view?utm_content=DAGG4eE2Wp8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 3,
      "title": "Capítulo 3 - Verbos Essenciais",
      "description": "Learn essential Portuguese verbs and their conjugations.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course covers essential Portuguese verbs and their conjugations, helping you form more complex sentences.",
      "skills": [
        "Understand essential Portuguese verbs",
        "Conjugate basic Portuguese verbs",
        "Form sentences using verbs"
      ],
      "image": "https://media.istockphoto.com/id/962315354/pt/foto/focused-millennial-african-student-making-notes-while-studying-in-cafe.jpg?s=612x612&w=0&k=20&c=dR6C3IjlixwWsDSDiJzsy7FspcyDsG9r52Q9QsOT7Mk=",
      "syllabus": [
        {
          "title": "Essential Verbs",
          "description": "Learn essential Portuguese verbs and their conjugations.",
          "modules": [
            { "type": "Lesson", "name": "Common Verbs", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Verb Conjugations", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Forming Sentences", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Verbs Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5gKGjCg/PDsIN5TswkUPQQjFrUOkRw/view?utm_content=DAGG5gKGjCg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 4,
      "title": "Capítulo 4 - Conversação Básica",
      "description": "Learn to hold basic conversations in Portuguese.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course helps you learn basic conversation skills in Portuguese, including common phrases and dialogues.",
      "skills": [
        "Hold basic conversations",
        "Use common phrases in dialogues",
        "Understand conversational Portuguese"
      ],
      "image": "https://www.candacesmithetiquette.com/images/Friends_meeting_in_the_street.jpg",
      "syllabus": [
        {
          "title": "Basic Conversation",
          "description": "Learn to hold basic conversations in Portuguese.",
          "modules": [
            { "type": "Lesson", "name": "Common Phrases", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Basic Dialogues", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Conversation Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Conversation Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5qd1BL0/w3bCPkttY-5bW7A6Rya_9A/view?utm_content=DAGG5qd1BL0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 5,
      "title": "Capítulo 5 - Vocabulário Comum",
      "description": "Expand your Portuguese vocabulary with common words.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course helps you expand your vocabulary with common Portuguese words used in daily life.",
      "skills": [
        "Understand and use common vocabulary",
        "Recognize common words",
        "Expand your Portuguese vocabulary"
      ],
      "image": "https://www.publi.com.br/wp-content/uploads/2020/07/vocabulario-publicitario-conheca-os-principais-termos-utilizados-20200630155449.jpg-1-1-1.jpg",
      "syllabus": [
        {
          "title": "Common Vocabulary",
          "description": "Expand your Portuguese vocabulary with common words.",
          "modules": [
            { "type": "Lesson", "name": "Daily Vocabulary", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Categories of Words", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Vocabulary Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Vocabulary Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5qg43j4/ym078zXV_CBPKBAUGwdezQ/view?utm_content=DAGG5qg43j4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 6,
      "title": "Capítulo 6 - Gramática Básica",
      "description": "Understand the basics of Portuguese grammar.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course covers the basic grammar rules of Portuguese, helping you construct correct sentences.",
      "skills": [
        "Understand basic grammar rules",
        "Apply grammar rules in sentences",
        "Construct correct sentences"
      ],
      "image": "https://s1.static.brasilescola.uol.com.br/be/2023/04/imagem-conceitual-traz-livro-aberto-e-acima-dele-a-palavra-portugues-em-referencia-a-gramatica-da-lingua-portuguesa.jpg",
      "syllabus": [
        {
          "title": "Basic Grammar",
          "description": "Understand the basics of Portuguese grammar.",
          "modules": [
            { "type": "Lesson", "name": "Grammar Rules", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Sentence Structure", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Grammar Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Grammar Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5uMwUJo/V39uHO4TuoyCWwngVIFJOw/view?utm_content=DAGG5uMwUJo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 7,
      "title": "Capítulo 7 - Tempo Presente",
      "description": "Learn how to use the present tense in Portuguese.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course teaches you how to use the present tense in Portuguese, helping you describe current actions.",
      "skills": [
        "Use present tense verbs",
        "Describe current actions",
        "Form sentences in the present tense"
      ],
      "image": "https://static.todamateria.com.br/upload/es/tu/estudodafoneticaefonologiaparte1-cke.jpg",
      "syllabus": [
        {
          "title": "Present Tense",
          "description": "Learn how to use the present tense in Portuguese.",
          "modules": [
            { "type": "Lesson", "name": "Present Tense Rules", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Conjugating Verbs", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Present Tense Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Present Tense Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5k_8iJs/Whn4ZJIR1UJuX6QqO3HGHA/view?utm_content=DAGG5k_8iJs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 8,
      "title": "Capítulo 8 - Tempo Passado",
      "description": "Learn how to use the past tense in Portuguese.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course teaches you how to use the past tense in Portuguese, helping you describe past actions.",
      "skills": [
        "Use past tense verbs",
        "Describe past actions",
        "Form sentences in the past tense"
      ],
      "image": "https://st.depositphotos.com/1001201/2345/i/450/depositphotos_23454814-stock-photo-idea.jpg",
      "syllabus": [
        {
          "title": "Past Tense",
          "description": "Learn how to use the past tense in Portuguese.",
          "modules": [
            { "type": "Lesson", "name": "Past Tense Rules", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Conjugating Verbs", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Past Tense Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Past Tense Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5nlUB_Y/5rUf-M5F9y3j3fDi0TR47Q/view?utm_content=DAGG5nlUB_Y&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 9,
      "title": "Capítulo 9 - Tempo Futuro",
      "description": "Learn how to use the future tense in Portuguese.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course teaches you how to use the future tense in Portuguese, helping you describe future actions.",
      "skills": [
        "Use future tense verbs",
        "Describe future actions",
        "Form sentences in the future tense"
      ],
      "image": "https://www.contabeis.com.br/assets/img/news/c8a3f623d4bf55481b5c3fc48d356bca.jpg",
      "syllabus": [
        {
          "title": "Future Tense",
          "description": "Learn how to use the future tense in Portuguese.",
          "modules": [
            { "type": "Lesson", "name": "Future Tense Rules", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Conjugating Verbs", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Future Tense Practice", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Future Tense Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5g7IPHc/R0ScpLLTHSFs1xKup4uS1w/view?utm_content=DAGG5g7IPHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
      "id": 10,
      "title": "Capítulo 10 - Expressões Idiomáticas",
      "description": "Learn common Portuguese idiomatic expressions.",
      "level": "Beginner",
      "price": "Free",
      "type": "Course",
      "time": "1 hour",
      "certificate": true,
      "about": "This course helps you understand and use common Portuguese idiomatic expressions in conversations.",
      "skills": [
        "Understand idiomatic expressions",
        "Use idiomatic expressions in conversations",
        "Enhance conversational skills"
      ],
      "image": "https://static.escolakids.uol.com.br/conteudo_legenda/56a3f1fb54f95d250b1745a8bffaf592.jpg",
      "syllabus": [
        {
          "title": "Idiomatic Expressions",
          "description": "Learn common Portuguese idiomatic expressions.",
          "modules": [
            { "type": "Lesson", "name": "Common Idioms", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Using Idioms in Conversations", "icon": "path_to_lesson_icon" },
            { "type": "Lesson", "name": "Practice with Idioms", "icon": "path_to_lesson_icon" },
            { "type": "Quiz", "name": "Idiomatic Expressions Quiz", "icon": "path_to_quiz_icon" },
            { "type": "Informational", "name": "Next Steps", "icon": "path_to_info_icon" }
          ]
        }
      ],
      "pdfLink": "https://www.canva.com/design/DAGG5gjXHTM/jOKzcZS22xUSRACIkaiNkw/view?utm_content=DAGG5gjXHTM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    }
    
    
  ]);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
