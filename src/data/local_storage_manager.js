import courses_content from "./courses_content";

/*
    structure
    {
        "courseId":{
            topic1: [available videos in the course ], where i = finished (1) or unfinished (0)..
            topic2: [available videos in the course],
            total_lessons: number e.g 100,
            finished_lessons: number e.g 30,
        },
    }
*/

export function formartCoursesIntoSchema(courses){
    let schema = {};
    for (const courseId in courses["courses"]){
        schema[courseId] = {};
        let topics = courses["courses"][courseId]["content"]["lessons"];
        let total_lessons = 0;
        for (const topic in topics){
            let lessonsLength = courses["courses"][courseId]["content"]["lessons"][topic]["videos"].length;
            total_lessons += lessonsLength;
            let progress = [];
            for (let i=0; i<lessonsLength; i++){
                progress.push(0);
            }
            schema[courseId][topic] = progress;
        }
        schema[courseId]["finished_lessons"] = 0;
        schema[courseId]["total_lessons"] = total_lessons;
        schema[courseId]["total_progress_percentage"] = 0;
        
    }
    localStorage.setItem("schema_set", true);
    return schema;
}


export function buildCourseProgressSchema(){
    let isSchemaSet =  localStorage.getItem("schema_set");
    if (isSchemaSet === false || isSchemaSet === undefined || isSchemaSet === null){
        let schema = formartCoursesIntoSchema(courses_content);
        localStorage.setItem("courses_progress", JSON.stringify(schema));
    }
}

export function readLocalStorageJSONData(item){
    return JSON.parse(localStorage.getItem(item));
}



