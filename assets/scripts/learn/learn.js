console.log("Looking under the hood? Reach us on discord to help!");

// Toggles (<details>)
if (window.localStorage.getItem("toggledOnSaved") == null) {
    console.log("Creating local save: toggled.");
    window.localStorage.setItem("toggledOnSaved", []);
}

function saveToggleStates() {
    let tempToggledOn = [];
    $(".sidebar-nav").find("details").filter("[open]").each(function(i) {
        tempToggledOn[i] = $(this).children("summary").text() + getCourseID();
    });

    const hasActiveLesson = $(".sidebar-nav .active").parents().eq(1);
    tempToggledOn.push(hasActiveLesson.children("summary").text() + getCourseID());

    window.localStorage.setItem("toggledOnSaved", tempToggledOn);
}

function restoreToggleStates() {
    let storedToggledOn = window.localStorage.getItem("toggledOnSaved");
    $(".sidebar-nav").find("details")
        .each(function(i) {
            if (storedToggledOn.includes($(this).children("summary").text() + getCourseID())) {
                $(this).attr("open", "");
            }
        })
}

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
    const hashtag = location.indexOf("/#/");
    const hashtag2 = location.indexOf("#/");

    if (hashtag != -1) {
        return location.substring(start, hashtag);
    }
    return location.substring(start, hashtag2);
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
        restoreToggleStates();

        const finButton = document.querySelector("#fin");
        const unfinButton = document.querySelector("#unfin");
        finButton.addEventListener("click", () => {
            mark(true);
        });
        unfinButton.addEventListener("click", () => {
            mark(false);
        });

        $(".sidebar-nav").find("details").click(function() {
            setTimeout(saveToggleStates);
        });
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);