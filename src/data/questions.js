const surveyQuestions = [
    {
        type:'test',
        contents:{
            main:'شما کدام یک از فریم ورک/کتابخانه های زیر را برای فرانت اند ترجیح می دهید؟',
            option1:'ReactJs',
            option2:'NextJs',
            option3:'VueJs',
            option4:'Angular'
        }
    },
    {
        type:'descriptive',
        contents:{
            main:'در مورد کاربرد UseContext توضیح دهید',
        }
    },
    {
        type:'blank',
        contents:{
            main:'از کدام یک از هوک های زیر بیشتر استفاده می کنید؟ به ترتیب اولویت ذکر کنید',
            option1:'UseState',
            option2:'UseEffect',
            option3:'UseCallback',
            option4:'UseContext'
        }
    },
]

export default surveyQuestions