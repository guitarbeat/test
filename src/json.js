// export const surveyJson = {
//   // Survey JSON object goes here
// };

export const surveyJson = {
  elements: [
    {
      type: "text",
      name: "names",
      title: "Names of Involved Parties:",
      isRequired: true,
      description:
        "Please enter the names of the individuals involved in the conflict, separated by a comma."
    },
    {
      type: "text",
      name: "dateOfIncident",
      title: "Date of Incident:",
      isRequired: true,
      inputType: "date",
      validators: [
        {
          type: "date",
          min: "1900-01-01",
          max: "2100-12-31",
          dateFormat: "YYYY-MM-DD",
          message: "Please enter a valid date in the format YYYY-MM-DD."
        }
      ]
    },
    {
      type: "text",
      name: "dateOfMediation",
      title: "Date of Conflict Mediation:",
      isRequired: true,
      inputType: "date",
      validators: [
        {
          type: "date",
          min: "1900-01-01",
          max: "2100-12-31",
          dateFormat: "YYYY-MM-DD",
          message: "Please enter a valid date in the format YYYY-MM-DD."
        }
      ]
    },
    {
      type: "text",
      name: "location",
      title: "Location of Conflict:",
      isRequired: true
    },
    {
      type: "text",
      name: "description",
      title: "Agreed Upon Description of Conflict:",
      isRequired: true,
      inputType: "textarea"
    },
    {
      name: "page2",
      elements: [
        {
          type: "text",
          name: "iThink1",
          title: "Intrapersonal - Katara - I Think:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Explain what you think or believe to be true about the conflict."
        },
        {
          type: "text",
          name: "iFeel1",
          title: "Intrapersonal - Katara - I Feel:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Write down some emotions that arise due to the conflict (only use single word descriptions). You may research more words to describe how you are feeling. List of more emotions: https://www.buzzfeed.com/mallorymcinnis/words-that-describe-emotions"
        },
        {
          type: "text",
          name: "iWant1",
          title: "Intrapersonal - Katara - I Want:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Discuss your desired outcome in the communication phases (see below for examples of aggressive, passive & assertive communication behaviors). Goal: Bring awareness to the potential of ineffective communication; promote empathetic communication Aggressive - I want Toph to know that she is extremely rude and inconsiderate. She’s a spoiled brat that has never cleaned up after themselves and expects others to do so. Passive - I want Toph to reach out to me first. I haven’t reached out to her because I don’t want to make her feel bad. But if she doesn’t reach out, I will continue to clean up after her, to keep the peace. Assertive - I want Toph and I to discuss how her behaviors are impacting me. I understand that she may not be used to the type of environment that myself and the others are in. I want us to express ourselves so that we both feel heard. I am also open to hearing what she feels about me and my behaviors."
        },
        {
          type: "text",
          name: "whyBecause1",
          title: "Intrapersonal - Katara - Why/Because:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Using the information from the previous boxes, write down a brief description of why you are experiencing the conflict this way."
        }
      ]
    },
    {
      name: "page3",
      elements: [
        {
          type: "text",
          name: "iThink2",
          title: "Intrapersonal - Toph - I Think:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Explain what you think or believe to be true about the conflict."
        },
        {
          type: "text",
          name: "iFeel2",
          title: "Intrapersonal - Toph - I Feel:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Write down some emotions that arise due to the conflict (only use single word descriptions          . You may research more words to describe how you are feeling. List of more emotions: https://www.buzzfeed.com/mallorymcinnis/words-that-describe-emotions"
        },
        {
          type: "text",
          name: "iWant2",
          title: "Intrapersonal - Toph - I Want:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Discuss your desired outcome in the communication phases (see below for examples of aggressive, passive & assertive communication behaviors). Goal: Bring awareness to the potential of ineffective communication; promote empathetic communication Aggressive - I want Katara to know that she is extremely rude and inconsiderate. She’s a spoiled brat that has never cleaned up after themselves and expects others to do so. Passive - I want Katara to reach out to me first. I haven’t reached out to her because I don’t want to make her feel bad. But if she doesn’t reach out, I will continue to clean up after her, to keep the peace. Assertive - I want Katara and I to discuss how her behaviors are impacting me. I understand that she may not be used to the type of environment that myself and the others are in. I want us to express ourselves so that we both feel heard. I am also open to hearing what she feels about me and my behaviors."
        },
        {
          type: "text",
          name: "whyBecause2",
          title: "Intrapersonal - Toph - Why/Because:",
          isRequired: true,
          inputType: "textarea",
          description:
            "Using the information from the previous boxes, write down a brief description of why you are experiencing the conflict this way."
        }
      ]
    },
    {
      name: "page4",
      elements: [
        {
          type: "html",
          name: "description2",
          html:
            "In this section, you will be asked to identify what you and the other person did and said during the conflict. The goal is to identify patterns of behavior that contribute to the conflict. You will be asked to describe the behavior and the impact it had on you. Please use the following format: Behavior: Impact: Here is an example: Behavior: Yelling Impact: It made me feel belittled and disrespected."
        },
        {
          type: "text",
          name: "kataraBehavior",
          title: "Intrapersonal - Katara - Behavior:",
          isRequired: true,
          inputType: "textarea"
        },
        {
          type: "text",
          name: "kataraImpact",
          title: "Intrapersonal - Katara - Impact:",
          isRequired: true,
          inputType: "textarea"
        },
        {
          type: "text",
          name: "tophBehavior",
          title: "Intrapersonal - Toph - Behavior:",
          isRequired: true,
          inputType: "textarea"
        },
        {
          type: "text",
          name: "tophImpact",
          title: "Intrapersonal - Toph - Impact:",
          isRequired: true,
          inputType: "textarea"
        }
      ]
    },
    {
      name: "page5",
      elements: [
        {
          type: "html",
          name: "description3",
          html:
            "In this section, you will be asked to describe the ideal resolution to the conflict. This is called a 'miracle question'. It is a way to think about what would happen if the conflict was completely resolved, in the most positive way possible. Imagine that a miracle happens and the conflict is completely resolved. How would you know that the conflict is completely resolved? What would you see, hear, and feel? What would the other person be doing and saying? Please describe the miracle resolution in detail."
        },
        {
          type: "text",
          name: "miracleResolution",
          title: "Miracle Resolution:",
          isRequired: true,
          inputType: "textarea"
        }
      ]
    },
    {
      name: "page6",
      elements: [
        {
          type: "html",
          name: "description4",
          html:
            "In this section, you will be asked to brainstorm three potential solutions to the conflict. These solutions should be based on the information you have provided in the previous sections. Please list the solutions in order of preference(1 being the most preferred solution)."
        },
        {
          type: "text",
          name: "solution1",
          title: "Solution 1:",
          isRequired: true,
          inputType: "textarea"
        },
        {
          type: "text",
          name: "solution2",
          title: "Solution 2:",
          isRequired: true,
          inputType: "textarea"
        },
        {
          type: "text",
          name: "solution3",
          title: "Solution 3:",
          isRequired: true,
          inputType: "textarea"
        }
      ]
    },
    {
      name: "page7",
      elements: [
        {
          type: "html",
          name: "description5",
          html:
            "In this section, you will be asked to negotiate a solution to the conflict. Please use the following format: I am willing to do X, if you are willing to do Y. Here is an example: I am willing to do the dishes every other day, if you are willing to do the laundry every other day. Please negotiate a solution to the conflict."
        },
        {
          type: "text",
          name: "negotiation",
          title: "Negotiation:",
          isRequired: true,
          inputType: "textarea"
        }
      ]
    }
  ],
  showCompletedPage: false,
  completeText: "Thank you for completing the survey!"
};
