export const MathimatiqueCoeficient = () => {
    const MathimatiqueData = {
        subjects: ["Mathematique", "Physique", "Sciences", "Informatique", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                                    coeficient: [4, 4, 1, 1, 1, 1, 1, 1, 1, 1],
                                    totalCoeficient: 16,
    };
    {MathimatiqueData.subjects.map((sub, index) => {
        localStorage.setItem(`${sub}Coeficient`, JSON.stringify(MathimatiqueData.coeficient[index]))
      })};
}

export const SciencesData = {subjects: ["Mathematique", "Physique", "Sciences", "Informatique", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                                coeficient: [3, 4, 4, 1, 1, 1, 1, 1, 1, 1],
                                    totalCoeficient: 18,
};

export const TechniqueData = {subjects: ["Mathematique", "Physique", "Technologie", "Technologie TP", "Informatique", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                                coeficient: [3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                                    totalCoeficient: 17,
};

export const EconomieData = {subjects: ["Mathematique", "Economie", "Gestion", "Hist/Geo", "Informatique", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                                coeficient: [2, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
                                    totalCoeficient: 17,
};

export const InformatiqueData = {subjects: ["Mathematique", "Physique", "Algorithme", "Base", "Tic", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                                    coeficient: [3, 2, 3, 1.5, 1.5, 1, 1, 1, 1, 1, 1],
                                    totalCoeficient: 17,
};

export const LettreData = {subjects: ["Pnse Islamique", "Hist/Geo", "Informatique", "Arabe", "Francais", "Anglais", "Philosophie", "Sport", "Option"],
                            coeficient: [1, 3, 1, 4, 2, 2, 4, 1, 1],
                                    totalCoeficient: 19,
};

export const SportData = {subjects: ["Sc Biologique", "Sport Pratique", "sport Theorique", "Education Physique", "Mathimatique", "Physique", "Francais", "Anglais", "Philosophie", "Option"],
                            coeficient: [3, 2.5, 0.5, 1, 3, 1, 1.5, 1.5, 1.5, 1],
                                    totalCoeficient: 16.5,
};
