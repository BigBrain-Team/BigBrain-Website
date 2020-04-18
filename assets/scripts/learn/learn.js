console.log("Looking under the hood?");

// Initial Setup
window.$docsify = {
    name: '<a id="navbar-title" href="/me">Me</a>',
    homepage: "home.md",
    loadSidebar: true,
    subMaxLevel: 2,
    alias: {
        '.*/_sidebar.md': '/_sidebar.md'
    },
    tabs: {
        persist: true,
        sync: false
    },
    pagination: {
        previousText: 'Previous Lesson',
        nextText: 'Next Lesson',
        crossChapter: true,
        crossChapterText: true,
    }
}

//=====// Finsihed Status //=====//

var finishedCourses = [];

// Gets the course identification (url)
function getCourse() {
    const location = window.location.href;
    const hashtag = location.indexOf("#");
    const question = location.indexOf("?");

    if (question != -1) {
        return location.substring(hashtag + 1, question);
    } else {
        return location.substring(hashtag + 1);
    }
}

// Gets the sidebar link object
function getLessonSidebar(lesson) {
    return $(`a[href='${"#" + lesson}'`).first();
}

// Button onclick function
function mark(finished) {
    const current = getCourse();

    if (finished) {
        if (!finishedCourses.includes(current)) {
            finishedCourses.push(current);
            finishedCourses.forEach(finishLesson);
        }
    } else {
        finishedCourses = finishedCourses.filter(lesson => lesson != current);
        unfinishLesson(current);
    }


}

// Adds checkmark to a lesson
function finishLesson(lesson) {
    const txt = getLessonSidebar(lesson).text();

    if (!txt.includes("✅")) {
        getLessonSidebar(lesson).text("✅ " + txt);
    }
}

function unfinishLesson(lesson) {
    const txt = getLessonSidebar(lesson).text();

    getLessonSidebar(lesson).text(txt.replace("✅ ", ""));
}

// Added button to every lesson
function install(hook) {
    var button = `
        <button onclick="mark(true)">Mark As Finished</button>
        <button onclick="mark(false)" class="gray">Mark As Unfinished</button>
    `;

    hook.afterEach(function(html, next) {
        next(html + button);
    });

    hook.doneEach(function() {
        finishedCourses.forEach(finishLesson);
    })
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);