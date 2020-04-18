console.log("Looking under the hood? Reach us on discord to help!");

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
var finishedLessonsLocal = [];

// Gets course id
function getCourseID() {
    const location = window.location.href;
    const start = location.indexOf("/learn/") + 7;
    const hashtag = location.indexOf("/#");

    return location.substring(start, hashtag);
}

// Gets the course identification (url)
function getLessonURL() {
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
    const current = getLessonURL();
    const user = auth.currentUser;
    const courseData = db.collection("users").doc(user.uid)
        .collection("courseData").doc(getCourseID());

    if (finished) {
        if (!finishedLessonsLocal.includes(current)) {
            finishedLessonsLocal.push(current);
            finishedLessonsLocal.forEach(finishLesson);
        }
    } else {
        finishedLessonsLocal = finishedLessonsLocal.filter(lesson => lesson != current);
        unfinishLesson(current);
    }

    courseData.update({
        finishedLessons: finishedLessonsLocal
    })
    .then(function() {
        console.log("Success");
    })
    .catch(function(error) {
        alert(error);
    })
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
        <button id="fin">Mark As Finished</button>
        <button id="unfin" class="gray">Mark As Unfinished</button>
    `;

    hook.afterEach(function(html, next) {
        next(html + button);
    });

    hook.doneEach(function() {
        finishedLessonsLocal.forEach(finishLesson);

        const finButton = document.querySelector("#fin");
        const unfinButton = document.querySelector("#unfin");
        finButton.addEventListener("click", () => {
            mark(true);
        });
        unfinButton.addEventListener("click", () => {
            mark(false);
        })
    })
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);