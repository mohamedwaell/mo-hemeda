export const exam1 = {
  params: "firstYear",
  questionsCount: 13,
  questions: [
    // من الصورة الأولى - السؤال الأول: أوجد قيمة X في كل من
    {
      id: 1,
      questionText: "أوجد قيمة س في المعادلة: 9/س = 6/8",
      image: null,
      options: [
        { id: "a", text: "س = 12", isCorrect: true }, // 9/x = 6/8 -> 6x = 72 -> x = 12
        { id: "b", text: "س = 10", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 6", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "أوجد قيمة س في المعادلة: 20/28 = س/21",
      image: null,
      options: [
        { id: "a", text: "س = 15", isCorrect: true }, // 20/28 = x/21 -> 5/7 = x/21 -> 7x = 105 -> x = 15
        { id: "b", text: "س = 12", isCorrect: false },
        { id: "c", text: "س = 10", isCorrect: false },
        { id: "d", text: "س = 8", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: "أوجد قيمة س في المعادلة: س/15 = 2/3",
      image: null,
      options: [
        { id: "a", text: "س = 10", isCorrect: true }, // x/15 = 2/3 -> 3x = 30 -> x = 10
        { id: "b", text: "س = 5", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 12", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثاني: ابحث عن وجود تناسب
    {
      id: 4,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 8، 24، 6، 18",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 8/24 = 6/18", isCorrect: true }, // 8/24 = 1/3 و 6/18 = 1/3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 8/6 = 24/18", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 8/18 = 6/24", isCorrect: false },
      ],
    },
    {
      id: 5,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 1.5، 0.5، 1، 3",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 1.5/0.5 = 3/1", isCorrect: true }, // 1.5/0.5 = 3 و 3/1 = 3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 1.5/1 = 0.5/3", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 1.5/3 = 0.5/1", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثالث: اكمل
    {
      id: 6,
      questionText: "أكمل النسبة: 7 : 8 = 21 : م",
      image: null,
      options: [
        { id: "a", text: "م = 24", isCorrect: true }, // 7/8 = 21/m -> 7m = 168 -> m = 24
        { id: "b", text: "م = 16", isCorrect: false },
        { id: "c", text: "م = 28", isCorrect: false },
        { id: "d", text: "م = 21", isCorrect: false },
      ],
    },
    {
      id: 7,
      questionText: "أوجد قيمة س في المعادلة: 3/4 = 6/(س+2)",
      image: null,
      options: [
        { id: "a", text: "س = 6", isCorrect: true }, // 3/4 = 6/(x+2) -> 3(x+2) = 24 -> 3x+6 = 24 -> 3x = 18 -> x = 6
        { id: "b", text: "س = 4", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 10", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الرابع: عامل الطلاء
    {
      id: 8,
      questionText:
        "عامل يمكنه طلاء حائط خلال 4 ساعات، وعامل آخر يمكنه طلاء نفس الحائط خلال 2 ساعة. إذا عمل العاملان معًا على طلاء نفس الحائط، فكم دقيقة يحتاجانها؟",
      image: null,
      options: [
        { id: "a", text: "120 دقيقة", isCorrect: false },
        { id: "b", text: "80 دقيقة", isCorrect: true }, // 1/4 + 1/2 = 1/t -> 1/4 + 2/4 = 1/t -> 3/4 = 1/t -> t = 4/3 ساعة = 80 دقيقة
        { id: "c", text: "60 دقيقة", isCorrect: false },
        { id: "d", text: "90 دقيقة", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الخامس: اللبن والكعك
    {
      id: 9,
      questionText:
        "إذا كانت 3/4 لتر من اللبن تكفي لعمل كعكة واحدة، فكم لترًا من اللبن تحتاج لعمل ثلاث كعكات؟",
      image: null,
      options: [
        { id: "a", text: "2.25 لتر", isCorrect: true }, // 3/4 × 3 = 9/4 = 2.25 لتر
        { id: "b", text: "2 لتر", isCorrect: false },
        { id: "c", text: "3 لتر", isCorrect: false },
        { id: "d", text: "2.5 لتر", isCorrect: false },
      ],
    },
    // من الصورة الثانية - المعادلة في الأعلى
    {
      id: 10,
      questionText: "أوجد قيمة ص في المعادلة: ص/24 = 5/ص",
      image: null,
      options: [
        { id: "a", text: "ص = 2√30", isCorrect: true }, // y/24 = 5/y -> y² = 120 -> y = √120 = 2√30
        { id: "b", text: "ص = 10", isCorrect: false },
        { id: "c", text: "ص = 12", isCorrect: false },
        { id: "d", text: "ص = 15", isCorrect: false },
      ],
    },
    // من الصورة الثالثة - السؤال البياني
    {
      id: 11,
      questionText: "أي من العلاقات البيانية التالية يمثل تناسبًا؟",
      image: "/grades/exam3.jpg", // مسار الصورة البيانية
      options: [
        { id: "a", text: "الشكل (أ)", isCorrect: false },
        { id: "b", text: "الشكل (ب)", isCorrect: false },
        { id: "c", text: "الشكل (ج)", isCorrect: true }, // التناسب الطردي هو خط مستقيم يمر بنقطة الأصل
        { id: "d", text: "الشكل (د)", isCorrect: false },
      ],
    },
  ],
};
export const exam2 = {
  params: "secondYear",
  questionsCount: 13,
  questions: [
    // من الصورة الأولى - السؤال الأول: أوجد قيمة X في كل من
    {
      id: 1,
      questionText: "أوجد قيمة س في المعادلة: 9/س = 6/8",
      image: null,
      options: [
        { id: "a", text: "س = 12", isCorrect: true }, // 9/x = 6/8 -> 6x = 72 -> x = 12
        { id: "b", text: "س = 10", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 6", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "أوجد قيمة س في المعادلة: 20/28 = س/21",
      image: null,
      options: [
        { id: "a", text: "س = 15", isCorrect: true }, // 20/28 = x/21 -> 5/7 = x/21 -> 7x = 105 -> x = 15
        { id: "b", text: "س = 12", isCorrect: false },
        { id: "c", text: "س = 10", isCorrect: false },
        { id: "d", text: "س = 8", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: "أوجد قيمة س في المعادلة: س/15 = 2/3",
      image: null,
      options: [
        { id: "a", text: "س = 10", isCorrect: true }, // x/15 = 2/3 -> 3x = 30 -> x = 10
        { id: "b", text: "س = 5", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 12", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثاني: ابحث عن وجود تناسب
    {
      id: 4,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 8، 24، 6، 18",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 8/24 = 6/18", isCorrect: true }, // 8/24 = 1/3 و 6/18 = 1/3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 8/6 = 24/18", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 8/18 = 6/24", isCorrect: false },
      ],
    },
    {
      id: 5,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 1.5، 0.5، 1، 3",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 1.5/0.5 = 3/1", isCorrect: true }, // 1.5/0.5 = 3 و 3/1 = 3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 1.5/1 = 0.5/3", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 1.5/3 = 0.5/1", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثالث: اكمل
    {
      id: 6,
      questionText: "أكمل النسبة: 7 : 8 = 21 : م",
      image: null,
      options: [
        { id: "a", text: "م = 24", isCorrect: true }, // 7/8 = 21/m -> 7m = 168 -> m = 24
        { id: "b", text: "م = 16", isCorrect: false },
        { id: "c", text: "م = 28", isCorrect: false },
        { id: "d", text: "م = 21", isCorrect: false },
      ],
    },
    {
      id: 7,
      questionText: "أوجد قيمة س في المعادلة: 3/4 = 6/(س+2)",
      image: null,
      options: [
        { id: "a", text: "س = 6", isCorrect: true }, // 3/4 = 6/(x+2) -> 3(x+2) = 24 -> 3x+6 = 24 -> 3x = 18 -> x = 6
        { id: "b", text: "س = 4", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 10", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الرابع: عامل الطلاء
    {
      id: 8,
      questionText:
        "عامل يمكنه طلاء حائط خلال 4 ساعات، وعامل آخر يمكنه طلاء نفس الحائط خلال 2 ساعة. إذا عمل العاملان معًا على طلاء نفس الحائط، فكم دقيقة يحتاجانها؟",
      image: null,
      options: [
        { id: "a", text: "120 دقيقة", isCorrect: false },
        { id: "b", text: "80 دقيقة", isCorrect: true }, // 1/4 + 1/2 = 1/t -> 1/4 + 2/4 = 1/t -> 3/4 = 1/t -> t = 4/3 ساعة = 80 دقيقة
        { id: "c", text: "60 دقيقة", isCorrect: false },
        { id: "d", text: "90 دقيقة", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الخامس: اللبن والكعك
    {
      id: 9,
      questionText:
        "إذا كانت 3/4 لتر من اللبن تكفي لعمل كعكة واحدة، فكم لترًا من اللبن تحتاج لعمل ثلاث كعكات؟",
      image: null,
      options: [
        { id: "a", text: "2.25 لتر", isCorrect: true }, // 3/4 × 3 = 9/4 = 2.25 لتر
        { id: "b", text: "2 لتر", isCorrect: false },
        { id: "c", text: "3 لتر", isCorrect: false },
        { id: "d", text: "2.5 لتر", isCorrect: false },
      ],
    },
    // من الصورة الثانية - المعادلة في الأعلى
    {
      id: 10,
      questionText: "أوجد قيمة ص في المعادلة: ص/24 = 5/ص",
      image: null,
      options: [
        { id: "a", text: "ص = 2√30", isCorrect: true }, // y/24 = 5/y -> y² = 120 -> y = √120 = 2√30
        { id: "b", text: "ص = 10", isCorrect: false },
        { id: "c", text: "ص = 12", isCorrect: false },
        { id: "d", text: "ص = 15", isCorrect: false },
      ],
    },
    // من الصورة الثالثة - السؤال البياني
    {
      id: 11,
      questionText: "أي من العلاقات البيانية التالية يمثل تناسبًا؟",
      image: "/grades/exam3.jpg", // مسار الصورة البيانية
      options: [
        { id: "a", text: "الشكل (أ)", isCorrect: false },
        { id: "b", text: "الشكل (ب)", isCorrect: false },
        { id: "c", text: "الشكل (ج)", isCorrect: true }, // التناسب الطردي هو خط مستقيم يمر بنقطة الأصل
        { id: "d", text: "الشكل (د)", isCorrect: false },
      ],
    },
  ],
};
export const exam3 = {
  params: "thirdYear",
  questionsCount: 13,
  questions: [
    // من الصورة الأولى - السؤال الأول: أوجد قيمة X في كل من
    {
      id: 1,
      questionText: "أوجد قيمة س في المعادلة: 9/س = 6/8",
      image: null,
      options: [
        { id: "a", text: "س = 12", isCorrect: true }, // 9/x = 6/8 -> 6x = 72 -> x = 12
        { id: "b", text: "س = 10", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 6", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "أوجد قيمة س في المعادلة: 20/28 = س/21",
      image: null,
      options: [
        { id: "a", text: "س = 15", isCorrect: true }, // 20/28 = x/21 -> 5/7 = x/21 -> 7x = 105 -> x = 15
        { id: "b", text: "س = 12", isCorrect: false },
        { id: "c", text: "س = 10", isCorrect: false },
        { id: "d", text: "س = 8", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: "أوجد قيمة س في المعادلة: س/15 = 2/3",
      image: null,
      options: [
        { id: "a", text: "س = 10", isCorrect: true }, // x/15 = 2/3 -> 3x = 30 -> x = 10
        { id: "b", text: "س = 5", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 12", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثاني: ابحث عن وجود تناسب
    {
      id: 4,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 8، 24، 6، 18",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 8/24 = 6/18", isCorrect: true }, // 8/24 = 1/3 و 6/18 = 1/3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 8/6 = 24/18", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 8/18 = 6/24", isCorrect: false },
      ],
    },
    {
      id: 5,
      questionText: "ابحث عن وجود تناسب في الأرقام التالية: 1.5، 0.5، 1، 3",
      image: null,
      options: [
        { id: "a", text: "يوجد تناسب: 1.5/0.5 = 3/1", isCorrect: true }, // 1.5/0.5 = 3 و 3/1 = 3
        { id: "b", text: "لا يوجد تناسب", isCorrect: false },
        { id: "c", text: "يوجد تناسب: 1.5/1 = 0.5/3", isCorrect: false },
        { id: "d", text: "يوجد تناسب: 1.5/3 = 0.5/1", isCorrect: false },
      ],
    },
    // من الصورة الأولى - السؤال الثالث: اكمل
    {
      id: 6,
      questionText: "أكمل النسبة: 7 : 8 = 21 : م",
      image: null,
      options: [
        { id: "a", text: "م = 24", isCorrect: true }, // 7/8 = 21/m -> 7m = 168 -> m = 24
        { id: "b", text: "م = 16", isCorrect: false },
        { id: "c", text: "م = 28", isCorrect: false },
        { id: "d", text: "م = 21", isCorrect: false },
      ],
    },
    {
      id: 7,
      questionText: "أوجد قيمة س في المعادلة: 3/4 = 6/(س+2)",
      image: null,
      options: [
        { id: "a", text: "س = 6", isCorrect: true }, // 3/4 = 6/(x+2) -> 3(x+2) = 24 -> 3x+6 = 24 -> 3x = 18 -> x = 6
        { id: "b", text: "س = 4", isCorrect: false },
        { id: "c", text: "س = 8", isCorrect: false },
        { id: "d", text: "س = 10", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الرابع: عامل الطلاء
    {
      id: 8,
      questionText:
        "عامل يمكنه طلاء حائط خلال 4 ساعات، وعامل آخر يمكنه طلاء نفس الحائط خلال 2 ساعة. إذا عمل العاملان معًا على طلاء نفس الحائط، فكم دقيقة يحتاجانها؟",
      image: null,
      options: [
        { id: "a", text: "120 دقيقة", isCorrect: false },
        { id: "b", text: "80 دقيقة", isCorrect: true }, // 1/4 + 1/2 = 1/t -> 1/4 + 2/4 = 1/t -> 3/4 = 1/t -> t = 4/3 ساعة = 80 دقيقة
        { id: "c", text: "60 دقيقة", isCorrect: false },
        { id: "d", text: "90 دقيقة", isCorrect: false },
      ],
    },
    // من الصورة الثانية - السؤال الخامس: اللبن والكعك
    {
      id: 9,
      questionText:
        "إذا كانت 3/4 لتر من اللبن تكفي لعمل كعكة واحدة، فكم لترًا من اللبن تحتاج لعمل ثلاث كعكات؟",
      image: null,
      options: [
        { id: "a", text: "2.25 لتر", isCorrect: true }, // 3/4 × 3 = 9/4 = 2.25 لتر
        { id: "b", text: "2 لتر", isCorrect: false },
        { id: "c", text: "3 لتر", isCorrect: false },
        { id: "d", text: "2.5 لتر", isCorrect: false },
      ],
    },
    // من الصورة الثانية - المعادلة في الأعلى
    {
      id: 10,
      questionText: "أوجد قيمة ص في المعادلة: ص/24 = 5/ص",
      image: null,
      options: [
        { id: "a", text: "ص = 2√30", isCorrect: true }, // y/24 = 5/y -> y² = 120 -> y = √120 = 2√30
        { id: "b", text: "ص = 10", isCorrect: false },
        { id: "c", text: "ص = 12", isCorrect: false },
        { id: "d", text: "ص = 15", isCorrect: false },
      ],
    },
    // من الصورة الثالثة - السؤال البياني
    {
      id: 11,
      questionText: "أي من العلاقات البيانية التالية يمثل تناسبًا؟",
      image: "/grades/exam3.jpg", // مسار الصورة البيانية
      options: [
        { id: "a", text: "الشكل (أ)", isCorrect: false },
        { id: "b", text: "الشكل (ب)", isCorrect: false },
        { id: "c", text: "الشكل (ج)", isCorrect: true }, // التناسب الطردي هو خط مستقيم يمر بنقطة الأصل
        { id: "d", text: "الشكل (د)", isCorrect: false },
      ],
    },
  ],
};
